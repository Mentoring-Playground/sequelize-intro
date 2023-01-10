const genreRouter = require('express').Router()
const genreController = require('../controller/genreController')

genreRouter.get('/', genreController.list)
genreRouter.post('/', genreController.create)
genreRouter.put('/:id', genreController.update)
genreRouter.delete('/:id', genreController.delete)

module.exports = genreRouter
// genreRouter.get('/', (req, res) => {
//   return res.status(200).json({ message: `get genre router` })
// })
