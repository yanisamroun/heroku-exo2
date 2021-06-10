// Simplification possible
// Quand le chemin est un dossier, il va directement prendre
// l'index.js
// const sequelize = require("./models/index.js");
const sequelize = require("./models");

console.log('Checking Database connection...');

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    // Synchroniser les modèles avec la BDD
    sequelize.sync({force: true});
})
// Si il n'arrive pas à se co à la BDD
.catch((err) => {
    console.log(err);
})