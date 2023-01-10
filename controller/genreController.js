const Genre = require('../models')

class genreController {
  static async list(req, res, next) {
    try {
      const genre = await Genre.findAll()
      return res.status(200).json({ genre })
    } catch (error) {
      next(error)
    }
  }
  static create(req, res, next) {
    try {
      let inputData = {
        title: req.body.title,
        target: req.body.target,
        startDate: req.body.startDate,
        expiredDate: req.body.expiredDate,
        file: imagePath,
      }

      Genre.create(inputData)
        .then((data) => {
          return res.status(201).json({ data })
        })
        .catch((error) => {
          return res.status(500).json({ message: error.message })
        })
    } catch (error) {
      next(error)
    }
  }
  static update(req, res, next) {
    try {
      const { id } = req.params

      let inputDataUpdate = {
        title: req.body.title,
        target: req.body.target,
        startDate: req.body.startDate,
        expiredDate: req.body.expiredDate,
        file: imagePath,
      }
      Genre.update(inputDataUpdate, {
        where: {
          id: id,
        },
        returning: true,
      })
        .then((data) => {
          return res.status(200).json({ data })
        })
        .catch((error) => {
          next(error)
        })
    } catch (error) {
      next(error)
    }
  }
  static async delete(req, res, next) {
    const { id } = req.params
    try {
      const genre = Genre.findOne({
        where: {
          id: id,
        },
      })
      if (!genre) {
        return res.status(404).json({ message: 'Band not found!' })
      } else {
        const deleteGenre = await Genre.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteGenre })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = genreController
