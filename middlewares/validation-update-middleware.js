
module.exports.validationUpdateMiddleware = async (req,res,next) => {
    try {
        const {id}=req.params
        const {title,price,url}=req.body
        if(!id ||!title || !price || !url){
            res.status(400).json({message:"Error Update Product"})
          }else{
            return next()
          }
    } catch (error) { 
        
    }
    
};