const appControllers = require('./app')
const taskController = require('./task-controller')

const controllers = {
    AppController: appControllers,
    TaskController: taskController
}

module.exports = controllers