const config= require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const pg=require('pg');
const path = require('path');
console.log(config)
const sequelize = new Sequelize("postgresql://postgres:05OyPkhF0ZuhR0ijsZ9h@containers-us-west-88.railway.app:7730/railway", {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectedModule:pg,
  dialectedOptions: {
    ssl: {
      require:true,
      rejectUnauthorized: false
    }
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
  modelDefiners.push(require(path.join(__dirname, '/models', file)));
});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
 
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon,Type } = sequelize.models;

// Aca vendrian las relaciones
Type.belongsToMany(Pokemon, {through:'Type*Pokemon'})
Pokemon.belongsToMany(Type, {through:'Type*Pokemon'})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};