const controller = require('../controllers/products-controller');

module.exports.updateProductMiddleware = async (req,res,next) => {
    try {
        const response = await controller.updateProduct(req,res);
        res.json(response)
    } catch (error) {
        res.status(400)
    }
};