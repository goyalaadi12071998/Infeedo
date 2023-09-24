const taskCore = require('./core')
const constants = require('../constants')

const CreateTask = async (data) => {
    if (!data.status) {
        data.status = constants.StatusOpen
    }

    const response = taskCore.CreateTask(data)
    return response
}

const UpdateTask = async (taskId, data) => {
    const task = await taskCore.GetTaskById(taskId)
    const response = await taskCore.UpdateTask(task, data)
    return response
}

const GetAllTasks = async (page) => {
    const response = await taskCore.GetAllTasks(page)
    return response
}

const GetTaskMetrics = async () => {
    const response = await taskCore.GetTaskMetrics()
    return response
}

module.exports = {CreateTask, UpdateTask, GetAllTasks, GetTaskMetrics}