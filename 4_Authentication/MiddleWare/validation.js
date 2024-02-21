const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');

const validate = asyncHandler(async(req, res, next)=>{
    let authHeader = req.headers.authorization || req.headers.Authorization ;
    let token;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1]
        await jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoder) => {
            if(err){
                res.status(401)
                throw new Error(err)
            }
            req.user = decoder.availuser;
            next()
        })
        if(!token){
            res.status(401);
            throw new Error("invalid token")
        }
    }
})

module.exports = validate