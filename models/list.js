const { Sequelize, DataTypes, Model } = require('sequelize'); 
const sequelize = require('../database/sequelize');

class List extends Model {}

List.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    AllList: {
      type: DataTypes.STRING,
      allowNull: false,  // Ensure this field is required
    },
    // type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,  // Ensure this field is required
    // },
  },
  {
    sequelize,
    modelName: 'List',
    tableName: 'Lists',
    timestamps: true,  // If you want the createdAt and updatedAt fields
  }
);

module.exports = List;
