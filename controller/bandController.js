const Band = require('../models')

class bandController {
  static async list(req, res, next) {
    try {
      const band = await Band.findAll()
      return res.status(200).json({ band })
    } catch (error) {
      next(error)
    }
  }
  static async create(req, res, next) {
    try {
      let inputData = {
        title: req.body.title,
        target: req.body.target,
        startDate: req.body.startDate,
        expiredDate: req.body.expiredDate,
        file: imagePath,
      }

      await Band.create(inputData)
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
      Band.update(inputDataUpdate, {
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
      const band = Band.findOne({
        where: {
          id: id,
        },
      })
      if (!band) {
        return res.status(404).json({ message: 'Band not found!' })
      } else {
        const deleteBand = await Band.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteBand })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = bandController
