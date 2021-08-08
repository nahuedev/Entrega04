
module.exports.validationMiddleware = async (req,res,next) => {
    try {
        const {title,price,url}=req.body
        if(!title || !price || !url){
            res.status(400).json({message:"Error Created Product"})
          }else{
            return next()
          }
    } catch (error) { 
        
    }
    
};