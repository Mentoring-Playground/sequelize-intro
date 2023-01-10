const userLogRouter = require('express').Router()
const userLogController = require('../controller/userLogController')

userLogRouter.get('/', userLogController.list)
userLogRouter.post('/', userLogController.create)
userLogRouter.put('/:id', userLogController.update)
userLogRouter.delete('/:id', userLogController.delete)

module.exports = userLogRouter

// userLogRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get user log router` })
// })
