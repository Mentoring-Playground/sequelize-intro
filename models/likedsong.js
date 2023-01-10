'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikedSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LikedSong.init({
    user_id: DataTypes.INTEGER,
    music_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LikedSong',
  });
  return LikedSong;
};