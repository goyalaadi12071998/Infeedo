const {Respond} = require('../utils/index')
const errors = require('../error')
const taskservice = require('../task/service')

const CreateTask = async (req, res) => {
    let createTaskData = req.body
    if (!createTaskData.title) {
        let err = new errors.BadRequestError("title is required")
        Respond(req, res, null, err)
        return
    }

    try {
        const paylaod = await taskservice.CreateTask(createTaskData)
        Respond(req, res, paylaod, null)
    } catch (err) {
        Respond(req, res, null, err)
    }
}

const UpdateTask = async (req, res) => {
    const taskId = req.params.id
    const updateTaskData = req.body

    try {
        const paylaod = await taskservice.UpdateTask(taskId, updateTaskData)
        Respond(req, res, paylaod, null)
        return
    } catch (err) {
        Respond(req, res, null, err)
        return
    }
}

const GetAllTasks = async (req, res) => {
    const page = req.body.page - 1

    try {
        const paylaod = await taskservice.GetAllTasks(page)
        Respond(req, res, paylaod, null)
        return
    } catch (err) {
        Respond(req, res, null, err)
        return
    }
}

const GetTaskMetrics = async (req, res) => {
    const params = req.params
}

module.exports = {
    CreateTask,
    UpdateTask,
    GetAllTasks,
    GetTaskMetrics
}