const {Product} = require('../models/Product');
const {getRandom} = require('../helpers/get-random');

createProduct=(req,res)=>{
    try {
        const product = new Product;
        const newProduct = product.save(req);
        return newProduct;

    } catch (error) {
        res.status(401).json({error:error})
    }
}

getAll =()=>{
    const products =  new Product;
    return products.getAll()
}

getProductsRandom = async ()=>{
    const product =  new Product;
    const products = await product.getAll()
    const idRandom = getRandom(products.length)
    
    return product.findById(idRandom);

}

getProductById = async (req,res)=>{
    try {
        const product =  new Product;
        return product.findById(req.params.id);
    } catch (error) {
        res.status(404).json({error:error})
    }
}

updateProduct= async(req,res)=>{
    try {
        const product =  new Product;
        const updateProduct = await product.update(req);
        return updateProduct;
        
       } catch (error) {
        res.status(400).json({error:error})
       }
}

deleteProduct=async(req,res)=>{
    try {
        const id = req.params.id
        const product = new Product;
        await product.remove(id)
        res.json({message: "Producto Eliminado"})
    } catch (error) {
       return error;
    }

 }



module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsRandom,
    getProductById
};
