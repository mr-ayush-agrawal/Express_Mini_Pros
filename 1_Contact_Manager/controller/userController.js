const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')

// @desc Register a user
// @route POST /api/users/register
// @access public -> anyone can access the end point
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All feilds are mandatory")
    }

    const userAvail = await User.findOne({ email });
    if (userAvail) {
        res.status(400);
        throw new Error("User already exist")
    }
    // Registrering the new user 
    // First creting a hashed Password
    const hashed = await bcrypt.hash(password, 10);
    // console.log("Hashed Password:", hashed)

    const newUser = await User.create({
        username,
        email,
        password: hashed
    });

    // console.log(`user Crated ${newUser}`);

    if (newUser) {
        res.status(201).json({ _id: newUser.id, email: newUser.email })
    }
    else {
        res.status(400);
        throw new Error("Invalid User data")
    }
})


// @desc login a user
// @route POST /api/users/login
// @access pulic 
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('All feilds are mendatory');
    }
    const user = await User.findOne({email});
    console.log(user);
    // compared password with hashed Password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN, {
            expiresIn: "10m"
        })
        res.status(200).json({ accessToken })
    }
    else {
        res.status(401);
        throw new Error("Invalid Login")
    }
})


// @desc Profile a user
// @route GET /api/users/profile
// @access private
const viewProfile = asyncHandler(async (req, res) => {
    console.log(req.body)
    res.json(req.user)
})

module.exports = { registerUser, loginUser, viewProfile }