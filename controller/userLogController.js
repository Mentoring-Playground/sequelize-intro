const UserLog = require('../models')

class userLogController {
  static async list(req, res, next) {
    try {
      const userLog = await UserLog.findAll()
      return res.status(200).json({ userLog })
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

      UserLog.create(inputData)
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
      UserLog.update(inputDataUpdate, {
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
      const userLog = UserLog.findOne({
        where: {
          id: id,
        },
      })
      if (!userLog) {
        return res.status(404).json({ message: 'user log not found!' })
      } else {
        const deleteUserLog = await UserLog.destroy({
          where: {
            id: id,
          },
          returning: true,
        })
        return res.status(200).json({ deleteUserLog })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userLogController
