const PlaylistItems = require('../models')

class playlistItemsController {
  static async list(req, res, next) {
    try {
      const playlistItems = await PlaylistItems.findAll()
      return res.status(200).json({ playlistItems })
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

      PlaylistItems.create(inputData)
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
      const playlistItems = PlaylistItems.findOne({
        where: {
          id: id,
        },
      })
      if (!playlistItems) {
        return res.status(404).json({ message: 'playlist item not found!' })
      } else {
        const deletePlaylistItems = await PlaylistItems.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deletePlaylistItems })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = playlistItemsController
