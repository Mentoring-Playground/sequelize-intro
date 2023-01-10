const likedSongRouter = require('express').Router()
const likedSongController = require('../controller/likedSongController')

likedSongRouter.get('/', likedSongController.list)
likedSongRouter.post('/', likedSongController.create)
likedSongRouter.put('/:id', likedSongController.update)
likedSongRouter.delete('/:id', likedSongController.delete)

module.exports = likedSongRouter

// likedSongRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get liked song router` })
// })
