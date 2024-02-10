const express = require('express')
const router = express.Router()

router.route('/').get((req, res)=>{
    res.status(200).json({status:200, msg:"Get all the contats"})
})
router.route('/').post((req, res)=>{
    res.status(200).json({status:200, msg:"Create new contats"})
})
router.route('/:id').put((req, res)=>{
    res.status(200).json({status:200, msg:`update contat ${req.params.id} `})
})
router.route('/:id').delete((req, res)=>{
    res.status(200).json({status:200, msg:`Delete contat ${req.params.id} `})
})

module.exports = router;