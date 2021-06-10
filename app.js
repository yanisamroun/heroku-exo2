// Simplification possible
// Quand le chemin est un dossier, il va directement prendre
// l'index.js
// const sequelize = require("./models/index.js");
const sequelize = require("./models");

// Récupère le paquet d'express
const express = require('express');
// Initialiser un serveur dans la variable app
const app = express();
// Crée une variable pour mon port
const PORT = 5000;

console.log('Checking Database connection...');

app.get('/', (req, res) => {
    sequelize.models.Message.findAll()
    .then(myMessages => {
        res.send(myMessages);
    })
    
})

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });



    // // SELECT * FROM message WHERE id=3
    // sequelize.models.Message.findByPk(3)
    // .then(myMessage => {
    //     // toJSON enlève le superflu donné par Sequelize
    //     console.log(myMessage.toJSON());
    // })

})
// Si il n'arrive pas à se co à la BDD
.catch((err) => {
    console.log(err);
})