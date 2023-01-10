const Playlist = require('../models')

class playlistController {
  static async list(req, res, next) {
    try {
      const playlist = await Playlist.findAll()
      return res.status(200).json({ playlist })
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

      Playlist.create(inputData)
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
      Playlist.update(inputDataUpdate, {
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
      const playlist = Playlist.findOne({
        where: {
          id: id,
        },
      })
      if (!playlist) {
        return res.status(404).json({ message: 'Playlist not found!' })
      } else {
        const deletePlaylist = await Playlist.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deletePlaylist })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = playlistController
