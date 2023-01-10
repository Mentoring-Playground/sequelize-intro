const playlistItemsRouter = require('express').Router()
const playlistItemsController = require('../controller/playlistItemsController')

playlistItemsRouter.get('/', playlistItemsController.list)
playlistItemsRouter.post('/', playlistItemsController.create)
playlistItemsRouter.put('/:id', playlistItemsController.update)
playlistItemsRouter.delete('/:id', playlistItemsController.delete)

module.exports = playlistItemsRouter
// playlistItemsRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get playlist items router` })
// })
