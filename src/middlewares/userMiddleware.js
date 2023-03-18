exports.validateUser= (req,res,next) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            status:"Failed",
            message:"Email and password are required!"
        })
    }
    next();
}



