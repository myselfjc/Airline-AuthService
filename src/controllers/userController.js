const UserService = require('../service/userService');

this.userService = new UserService();

exports.createUser = async (req,res,next) =>{
    try {

        const user = await this.userService.createUser(req.body);
        res.status(200).json({
            status:"Success",
            message:"User created successfully!",
            user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Failed in Controller layer!",
            error
        })
    }
}

exports.deleteUser = async (req,res,next) =>{
    try {
        const user = await this.userService.deleteUser(req.params.id);
        res.status(200).json({
            status:"Success",
            message:"User deleted successfully!",
            user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Failed in Controller layer!",
            error
        })  
    }
}

exports.getUser = async (req,res,next) =>{
    try {
        const user = await this.userService.getUser(req.params.id);
        res.status(200).json({
            status:"Success",
            message:"User fetched successfully!",
            user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Failed in Controller layer!",
            error
        })  
    }
}