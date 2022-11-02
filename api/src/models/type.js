const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
    }
  });
}; 
