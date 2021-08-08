const controller = require('../controllers/products-controller');

module.exports.createProductsMiddleware = async (req,res,next) => {
    try {
        const response =await controller.createProduct(req); 
        res.send('Producto Creado');
    } catch (error) {
        res.status(400)
    }
};