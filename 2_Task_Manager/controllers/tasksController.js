const Task = require('../Models/TaskModel')

const getAllTasks = async (req, res) => {
    try{
        const allTasks = await Task.find();
        res.status(200).json({tasks : allTasks})
    }
    catch(err){
        // res.status(500).json({msg : err})
    }
}
const getTask = async (req, res) => {
    const reqId = req.params.id;
    try{
        const task = await Task.findOne({_id: reqId})
        if(!task)
            return res.status(404).json({msg: `Not Found id ${reqId}`})
        else
            res.status(200).json({task})
    }
    catch(err){
        res.status(500).json({msg: err})
    }
}
const createTask = async(req, res) => {
    try{
        const userTask = await Task.create(req.body)
        res.status(201).json(userTask)
    }
    catch(err){
        res.status(500).json({msg: err}) 
    }
}
const updateTask = async (req, res) => {
    const reqId = req.params.id
    try{
        const task = await Task.findOneAndUpdate({_id: reqId}, req.body, {
            new: true,
            runValidator: true
        })
        res.status(200).json({id: reqId, data: req.body})
    }
    catch(err){
        res.status(500).json({msg: err})
    }
}
const deleteTask = async (req, res) => {
    const reqId = req.params.id;
    try{
        const task = await Task.findOneAndDelete({_id : reqId});
        if(!task)
            return res.status(404).json(`No Task found with ID ${reqID}`)

        res.status(200).json(task)
    }
    catch(err){
        res.status(500).json({msg: err})
    }
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}