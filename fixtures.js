const sequelize = require("./models");

console.log('Checking Database connection...');

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    // Synchroniser les modèles avec la BDD
    sequelize.sync({force: true})
    .then(()=> {

        // Insérer des données
        // Pour avoir un modèle, on va passer par l'instance
        // de sequelize
        sequelize.models.Message.create({
            title: "Un message secret",
            body: "Je m'appelle Bond. James Bond."
        })

        sequelize.models.Message.create({
            title: "Mon message qui tue"
        })

    });
})
// Si il n'arrive pas à se co à la BDD
.catch((err) => {
    console.log(err);
})