const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)
// rota para ver os compromissos cadastrados
router.get('/tasks/list', TaskController.listTasks);

module.exports = router

