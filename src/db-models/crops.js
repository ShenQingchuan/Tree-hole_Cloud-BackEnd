const { DataTypes } = require("sequelize");

/**
 * @param {import("sequelize/types").Sequelize} sequelize 
 * @returns {import("sequelize/types").ModelStatic} cropsModel
 */
const CropsDef = {
  cropId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requiredLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seedCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0,
  },
  harvestCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0,
  },
  onSaleCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}

module.exports = CropsDef