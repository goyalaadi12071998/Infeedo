const models = require('../models/index')
const errors = require('../error')
const { getDb } = require('../providers/mysql/sequelize')

const sequelize = getDb()

const CreateTask = async (data) => {
    try {
        const response = await models.Task.create({
            title: data.title,
            status: data.status
        })

        return response
    } catch (err) {
        throw new errors.BadRequestError("Error in creating task entry in db")
    }
}

const GetTaskById = async (taskId) => {
    try {
        const task = await models.Task.findByPk(taskId)
        if(task == null) {
            throw new errors.DataNotFoundError("No task with this id exist")
        }

        return task
    } catch (err) {
        if (err.code == "DATA_NOT_FOUND") {
            throw err
        }
        throw new errors.BadRequestError("Error in fetching data from db")
    }
} 

const UpdateTask = async (task, data) => {
    try {
        if (data.status) {
            task.status = data.status
        }

        if (data.title) {
            task.title = data.title
        }

        await task.save()

    } catch (err) {
        throw new errors.BadRequestError("Error in updating data in db")
    }
}

const GetAllTasks = async (page) => {
    const offset = page * 2
    const limit = 2

    try {
        const response = await models.Task.findAll({limit, offset})
        return response
    } catch (err) {
        console.log(err)
        throw new errors.BadRequestError("Error in fetching data in db")
    }
}

const GetTaskMetrics = async () => {
    try {
        const response = await models.Task.findAll({attributes: [
            'status',
            [sequelize.fn('COUNT', sequelize.col('status')), 'status_count'],
          ],
          group: ['status']}
        )

        return response
    } catch (err) {
        console.log(err)
        throw new errors.BadRequestError("Error in fetching data in db")
    }
}

module.exports = {CreateTask, UpdateTask, GetTaskById, GetAllTasks, GetTaskMetrics}