const userRouter = require('express').Router()
const userController = require('../controller/userController')

userRouter.get('/', userController.list)
userRouter.post('/', userController.create)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter

// userRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get user router` })
// })
