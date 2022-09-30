const routes = require('express').Router()
const userController = require('../controllers/users.js')

routes.get('/', userController.get_all_users)

routes.get('/:id', userController.get_user)

routes.put('/update:id', userController.put_user)

routes.post('/post', userController.post_user)

routes.delete('/remove:id', userController.delete_user)

module.exports = routes