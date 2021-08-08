const router = require('express').Router();
const controller = require('../controllers/products-controller');
const validationProductsMiddleware = require('../middlewares/validation-middleware').validationMiddleware;
const createProductsMiddleware = require('../middlewares/create-products-middleware').createProductsMiddleware;
const validationUpdateMiddleware = require('../middlewares/validation-update-middleware').validationUpdateMiddleware;
const updateProductMiddleware = require('../middlewares/update-product-middleware').updateProductMiddleware;


module.exports = () => {
    router.get('/', (req, res)=>{
       res.render('index')     
    })
    router.get("/productos", async  (req, res) => {
      const response =await controller.getAll(); 
      res.json(response);
    });

    router.post("/productos", validationProductsMiddleware,createProductsMiddleware);

     router.get('/productos/:id', async (req, res)=>{   
      
      const response = await controller.getProductById(req,res);
      res.json(response)

     })

     router.put('/productos/:id',validationUpdateMiddleware,updateProductMiddleware)

     router.delete('/productos/:id', async (req, res)=>{
        const response = await controller.deleteProduct(req,res)
        res.json(response)
     })

    return router;
}
