const sequelize = require("./models");
const faker = require('faker');

console.log('Checking Database connection...');

function generateMessages() {
    for(let i=1; i<=50;i++) {
        sequelize.models.Message.create({
            title: faker.random.words(7),
            body: faker.lorem.paragraphs(2)
        })
    }
}

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    // Synchroniser les modèles avec la BDD
    sequelize.sync({force: true})
    .then(()=> {
        generateMessages();

    });
})
// Si il n'arrive pas à se co à la BDD
.catch((err) => {
    console.log(err);
})