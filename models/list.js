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
    text: {  
      type: DataTypes.STRING,
      allowNull: false, // Task name is required
    },
    description: {  
      type: DataTypes.TEXT, // Allows longer descriptions
      allowNull: true,  // Optional field
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Default is not completed
    },
  },
  {
    sequelize,
    modelName: 'List',
    tableName: 'Lists',
    timestamps: true, // Adds createdAt and updatedAt
  }
);

module.exports = List;
