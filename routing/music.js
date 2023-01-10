const musicRouter = require('express').Router()
const musicController = require('../controller/musicController')

musicRouter.get('/', musicController.list)
musicRouter.post('/', musicController.create)
musicRouter.put('/:id', musicController.update)
musicRouter.delete('/:id', musicController.delete)

module.exports = musicRouter
// musicRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get music router` })
// })
