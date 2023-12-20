const { Op } = require('sequelize');
const models = require('../models/');
const batik = models.batik;
const product = models.product;
const batikProduct = models.batik_product;
const serviceAccount = require('../service_account/service_account.json');
const { Storage } = require("@google-cloud/storage");
const sequelize = models.sequelize;
const date = new Date();
const storage = new Storage({keyFilename: serviceAccount});
const axios = require('axios');

const getAllBatik = async(req, res) => {
    try{
        const allBatik = await batik.findAll(
            {
                attributes: ['id', 'name', 'url_batik', 'origin'], 
            }
        );

        res.status(200).json({
            error: false,
            message: 'Get all batik success',
            data: allBatik
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Article',
            serverMessage: error.message
            })
        }
}

const getSelectedBatik = async(req, res) => {
    try{
        const selectedBatik = await batik.findOne({
            attributes: [
                'name',
                'url_batik',
                'origin',
                'meaning',
                'making_process',
                'usage_purpose'
            ],
            where: {
                id: req.params.id,
            },
        });
        
        res.status(200).json({
            error: false,
            message: 'Get selected batik',
            data: selectedBatik
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Selected Batik',
            serverMessage: error.message
        })
    }
}

const predictBatik = async(req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                error: true,
                message: 'Bad request',
                data: null
            })
        }

        const file = req.file;
        if (!file) {
            return res.status(400).json({
                error: true,
                message: 'No image uploaded',
                data: null
            })
        }

        const fileData = file.buffer;
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
        const fileName = formattedDate + file.originalname;

        // Load service account JSON file
        const serviceAccount = require('../service_account/service_account.json');

        // Initialize Google Cloud Storage using service account
        const storage = new Storage({
            projectId: serviceAccount.project_id,
            credentials: {
            client_email: serviceAccount.client_email,
            private_key: serviceAccount.private_key,
            },
        });

        const bucket = storage.bucket('ambatik_bucket');
        const folderPath = 'batik_prediction_photo';
        const fileRef = bucket.file(`${folderPath}/${fileName}`);
        await fileRef.save(fileData);

        // const fileURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        const fileURL = `https://storage.googleapis.com/${bucket.name}/batik_prediction_photo/${fileName}`;
        // const fileURL = `https://storage.cloud.google.com/user-photo-profile/${bucket.name}/user_photo/${fileName}`;

        const flaskUrl = `http://${process.env.FLASK_HOST}:5000/process-image`;
        

        axios.post(flaskUrl, { fileName: fileName })
        .then(async (response) => {
            // Handle the response from the local Flask API
            // res.status(200).send('receive ok');
            const batikName = response.data['types'];
            const accuracy = response.data['accuracy'];
            const rounded = accuracy.toFixed(2);
            const selectedBatik = await batik.findOne({
            attributes: [
                'name',
                'url_batik',
                'origin',
                'meaning',
                'making_process',
                'usage_purpose'
            ],
                where: {
                    name: `Batik ${batikName}`,
                },
            });

            const productRecommendation = await product.findAll({
            attributes: [
                'name',
                'url_product',
                'price',
                'rating',
                'product_sold',
                'store_name'
            ],
            where: {
                name: {
                [Op.like]: '%'+batikName+'%',
                }
            }
            });

            res.status(200).json({
                error: false,
                message: 'Get prediction batik',
                batikName: batikName,
                accuracy: parseFloat(rounded),
                data: selectedBatik,
                products: productRecommendation
                // others: response.data
            })
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: 'Server Error: Get Prediction Batik',
                serverMessage: error.message
            })
        });
    }
    catch(error){
        res.status(500).json({
            error: true,
            uploaded: false,
            message: 'Failed upload batik prediction photo',
            url: null,
            errorMsg: error.message
        })
    }
}

module.exports = {
    getAllBatik,
    getSelectedBatik,
    predictBatik
}
