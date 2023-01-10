const User = require('../models')

class userController {
  static async list(req, res, next) {
    try {
      const user = await User.findAll()
      return res.status(200).json({ user })
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

      User.create(inputData)
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
      User.update(inputDataUpdate, {
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
      const user = User.findOne({
        where: {
          id: id,
        },
      })
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      } else {
        const deleteUser = await User.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteUser })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController
