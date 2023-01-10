const playlistRouter = require('express').Router()
const playlistController = require('../controller/playlistController')

playlistRouter.get('/', playlistController.list)
playlistRouter.post('/', playlistController.create)
playlistRouter.put('/:id', playlistController.update)
playlistRouter.delete('/:id', playlistController.delete)

module.exports = playlistRouter

// playlistRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get playlist router` })
// })
