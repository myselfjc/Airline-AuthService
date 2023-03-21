const UserService = require('../service/userService');

this.userService = new UserService();

exports.signup = async (req,res,next) =>{
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

exports.login = async (req,res,next) =>{
    try {
        const {email,password} = req.body;
        const user = await this.userService.login(email,password);
        res.status(200).json({
            status:"Success",
            message:"User logged in successfully!",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Failed in Controller layer!",
            error
        })
    }
}

exports.isAuthenticated = async (req,res,next) =>{
    try {
        console.log("Hi");
        const jwtToken = req.headers['x-access-token'];
        
        const validate = await this.userService.isAuthenticated(jwtToken);
        res.status(200).json({
            status:"Success",
            message:"User is authenticated!",
            data: validate
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

exports.isAdmin = async (req,res,next) =>{
    try {
        const user = await this.userService.isAdmin(req.body.id);
        if(user === true){
            return res.status(200).json({
                status:"Success",
                message:"User is an Amin!",
                user
            })
        }
        res.status(200).json({
            status:"Success",
            message:"User is not an Admin!",
            user
        });
    } catch (error) {
        res.status(400).json({
            status:"Failed",
            message:"Failed in Controller layer!",
            error
        }) 
    }
}