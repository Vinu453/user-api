const jwt =require("jsonwebtoken")
const authMiddleware =(req,res,next)=>{
    try{
        const token =req.headers.authorization

        if(!token){
            return res.status(401).json({message:"no token provided"})
        }
        
    }
}