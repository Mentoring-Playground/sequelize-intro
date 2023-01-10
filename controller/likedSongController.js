const LikedSong = require('../models')

class likedSongController {
  static async list(req, res, next) {
    try {
      const likedsong = await LikedSong.findAll()
      return res.status(200).json({ likedsong })
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

      LikedSong.create(inputData)
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
      LikedSong.update(inputDataUpdate, {
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
      const likedSong = LikedSong.findOne({
        where: {
          id: id,
        },
      })
      if (!likedSong) {
        return res.status(404).json({ message: 'Liked Song not found!' })
      } else {
        const deleteLikedSong = await LikedSong.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteLikedSong })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = likedSongController
