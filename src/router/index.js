const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index')

router.get('/ping', controllers.AppController.Pong)
router.post('/create-task', controllers.TaskController.CreateTask)
router.post('/update-task/:id', controllers.TaskController.UpdateTask)
router.get('/tasks', controllers.TaskController.GetAllTasks)
router.get('/task-metrics', controllers.TaskController.GetTaskMetrics)

module.exports = router
