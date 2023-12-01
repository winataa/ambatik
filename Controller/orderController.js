const models = require('../models/');
const order = models.order;
const like = models.like;
const user = models.user;
const product = models.product;
const detailOrder = models.detail_order;
const sequelize = require('sequelize');

const getAllOrder = async(req, res) => {
    try{
        // const allOrder = await order.findAll({
        //     attributes: [
        //         [sequelize.col('orders.total_item'), 'total_item'],
        //         [sequelize.col('orders.total_price'), 'total_price'],
        //         [sequelize.col('products.name'), 'name'],
        //         [sequelize.col('orders.createdAt'), 'createdAt'],
        //         [sequelize.col('products.url_product'), 'url_product'],
        //     ],
        //     include: {
        //         model: product,
        //         attributes: [],
        //     },
        //     where: {
        //         userId: req.params.userid,
        //     },
        //     group: ['orders.createdAt'],
        //     order: [[sequelize.col('orders.createdAt'), 'DESC']],
        // });

        const allOrder = await order.findAll({
            // subQuery: false,
            attributes: [
                'total_item',
                'total_price',
                // 'product.name',
                'createdAt',
                // [sequelize.col('order.createdAt'), 'createdAt'],
                // 'product.url_product',
                [
                    sequelize.literal('(SELECT COUNT(*) FROM detail_orders WHERE detail_orders.orderId = order.id) - 1'),
                    'other_item',
                ],
            ],
            include: [
                {
                    model: detailOrder,
                    attributes: ['productId'],
                    // where: { orderId: sequelize.col('order.id') },
                    include: [
                        {
                            model: product,
                            attributes: [
                                'name', 
                                'url_product',    
                            ],
                        },
                    ],
                },
            ],
            where: { userId: req.params.userid },
            group: ['order.createdAt'],
            order: [[sequelize.col('order.createdAt'), 'DESC']],
        })
        if(allOrder.length > 0){
            res.status(200).json({
                error: false,
                availableOrder: true,
                message: 'Get all order success',
                data: allOrder
            })
        }
        else{
            res.status(200).json({
                error: false,
                availableOrder: false,
                message: 'User dont have order history',
                data: allOrder
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Order',
            serverMessage: error.message
            })
        }
}

const checkout = async(req, res) => {
    try{
        const createdOrder = await order.create({
            total_item: req.body.totalqty,
            total_price: req.body.grandtotal,
            userId: req.body.userId,
        });
        const latestOrderId = createdOrder.id;
        // const latestOrderId = await order.findOne({
        //     attributes: [
        //         [sequelize.literal('(SELECT MAX(id) FROM orders)'), 'latestOrderId'],
        //     ],
        // });
        const eachQtys = req.body.eachqtys;
        const eachPrices = req.body.eachprices;
        const productIds = req.body.productIds;

        // Validate array lengths (ensure they have the same length)
        if (eachQtys.length === eachPrices.length && eachPrices.length === productIds.length) {
            // Create detailOrder records for each set of values
            for (let i = 0; i < eachQtys.length; i++) {
            await detailOrder.create({
                each_qty: eachQtys[i],
                each_price: eachPrices[i],
                orderId: latestOrderId,
                productId: productIds[i],
            });
            }
        } else {
            console.error('Array lengths do not match.');
        }
        

        // await detailOrder.create({
        //     each_qty: req.body.eachqtys,
        //     each_price: req.body.eachprices,
        //     orderId: latestOrderId,
        //     productId: req.body.productIds
        // });
        res.status(201).json({
            error: false,
            checkout: true,
            message: 'Successfully checkout product'
            // latest: latestOrderId
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Checkout',
            serverMessage: error.message
        })
    }
    
}

module.exports = {
    getAllOrder,
    checkout
}