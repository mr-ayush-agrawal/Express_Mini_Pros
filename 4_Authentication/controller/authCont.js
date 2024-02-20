const asyncHandler = require('express-async-handler')
const User = require('../config/model')
const bcrypt = require('bcrypt')

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

const login = (req, res) =>{
    res.send('123')
}
const dashBoard = (req, res) => {
    res.send('DashBoard res')
}

module.exports = {login, dashBoard, register}