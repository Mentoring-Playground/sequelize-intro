const bandRouter = require('express').Router()
const bandController = require('../controller/bandController')

bandRouter.get('/', bandController.list)
bandRouter.post('/', bandController.create)
bandRouter.put('/:id', bandController.update)
bandRouter.delete('/:id', bandController.delete)

module.exports = bandRouter
// bandRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get band router` })
// })
