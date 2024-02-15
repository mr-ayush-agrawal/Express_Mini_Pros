const getAllTasks = (req, res) => {
    res.send('<h1>Getting all tasks</h1>')
}
const getTask = (req, res) => {
    res.send('get Single Creaated')
}
const createTask = (req, res) => {
    res.json(req.body)
}
const updateTask = (req, res) => {
    res.send('updated Task')
}
const deleteTask = (req, res) => {
    res.send('Task Deleted')
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}