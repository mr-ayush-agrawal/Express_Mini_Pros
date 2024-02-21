const asyncHandler = require('express-async-handler')
const User = require('../config/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = asyncHandler(async (req, res)=>{
    const {user, password} = req.body;
    if(!user || !password){
        res.status(400);
        throw new Error('Both user and Password required')
    }
    console.log(user, password)
    const userAvail = await User.findOne({ user });
    if(userAvail){
        res.status(400)
        throw new Error ('User Already Exists')
    }

    // Creating hashed Passwoed
    const hashed = await bcrypt.hash(password, 15)
    const newUser = await User.create({
        user,
        password:hashed
    })
    console.log('User Created')

    if(newUser){
        res.status(201).json({_id: newUser._id, user: newUser.user})
    }
    else{
        res.status(400)
        throw new Error('Invalid User data')
    }
})

const login = asyncHandler(async(req, res) =>{
    const {user, password} = req.body
    if(!user || !password){
        res.status(400);
        throw new Error("All feilds are mendatory")
    }
    const availuser = await User.findOne({user})
    if(availuser && await bcrypt.compare(password, availuser.password)){
        const accessToken = jwt.sign({
            availuser : {
                user: availuser.user,
                id: availuser.id
            }
        }, process.env.ACCESS_TOKEN, {
            expiresIn: "10m"
        });
        res.status(200).json({ accessToken })
    }
    else{
        res.status(401);
        throw new Error("Invalid Login")
    }
})



const dashBoard = (req, res) => {
    const num = Math.floor(Math.random()*100)
    res.status(200).json({
        msg: `Hello, ${req.user.user}`,
        secret: `Here is your authorized data, your lucky number is ${num}`
    })
}

module.exports = {login, dashBoard, register}   