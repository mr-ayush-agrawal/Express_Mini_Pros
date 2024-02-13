const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')

const validate = asyncHandler(async (req, res, next)=> {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        await jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if(err){
                res.status(401);    
                console.log("ERROR IS : ",err)
                throw new Error("Unauthorized Access");
            }
            req.user = decoded.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("invalid token")
        }
    }
})

module.exports = validate