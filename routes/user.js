const routes = require('express').Router({})
const userController = require('../controllers/user.js')

routes.get('/', userController.get_all_users)

routes.get('/:id', userController.get_user)

routes.put('/:id', userController.put_user)

routes.post('/', userController.post_user)

routes.delete('/:id', userController.delete_user)

module.exports = routes