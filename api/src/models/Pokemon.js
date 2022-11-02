const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// - ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
// - Nombre *
// - Vida
// - Ataque
// - Defensa
// - Velocidad 
// - Altura
// - Peso
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apodo:{
      type: DataTypes.STRING,

    },
    life: {
      type: DataTypes.STRING,
    },
    attack: {
      type: DataTypes.STRING,
    },
    Def: {
      type: DataTypes.STRING,
    },
    special_defense: {
      type: DataTypes.STRING
    },
    special_attack: {
      type: DataTypes.STRING
    },
    Altura: {
      type: DataTypes.STRING,

    },
    Velocidad: {
      type: DataTypes.STRING,
    },
    Peso: {
      type: DataTypes.STRING,

    },
    img: {
      type: DataTypes.STRING,
    }
  }, { timestamps: false });
};
