const taskIDDOM = document.querySelector('.task-edit-id')
const tasktitleDOM = document.querySelector('.task-edit-title')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let temptitle

const showTask = async () => {
    try {
        const {
            data: { task },
        } = await axios.get(`/api/v1/tasks/${id}`)
        const { _id: taskID, completed, title } = task

        taskIDDOM.textContent = taskID
        tasktitleDOM.value = title
        temptitle = title
        if (completed) {
            taskCompletedDOM.checked = true
        }
    } catch (error) {
        console.log(error)
    }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
    editBtnDOM.textContent = 'Loading...'
    e.preventDefault()
    try {
        const tasktitle = tasktitleDOM.value
        const taskCompleted = taskCompletedDOM.checked

        const {
            data: { task },
        } = await axios.patch(`/api/v1/tasks/${id}`, {
            title: tasktitle,
            completed: taskCompleted,
        })

        const { _id: taskID, completed, title } = task

        taskIDDOM.textContent = taskID
        tasktitleDOM.value = title
        temptitle = title
        if (completed) {
            taskCompletedDOM.checked = true
        }
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = `success, edited task`
        formAlertDOM.classList.add('text-success')
    } catch (error) {
        console.error(error)
        tasktitleDOM.value = temptitle
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = `error, please try again`
    }
    editBtnDOM.textContent = 'Edit'
    setTimeout(() => {
        formAlertDOM.style.display = 'none'
        formAlertDOM.classList.remove('text-success')
    }, 3000)
})