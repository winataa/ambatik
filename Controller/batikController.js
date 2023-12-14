const models = require('../models/');
const batik = models.batik;

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

module.exports = {
    getAllBatik
}
