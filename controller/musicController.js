const Music = require('../models/')

class musicController {
  static async list(req, res, next) {
    try {
      const music = await Music.findAll()
      return res.status(200).json({ music })
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

      Music.create(inputData)
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
      Music.update(inputDataUpdate, {
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
      const music = Music.findOne({
        where: {
          id: id,
        },
      })
      if (!music) {
        return res.status(404).json({ message: 'Music not found!' })
      } else {
        const deleteMusic = await Music.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteMusic })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = musicController
