// Récupérer la librairie de Sequelize
const {DataTypes,Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    // Dans le cas de mariadb
    // 'mariadb://notes_user:1poney2poneys3poneys@localhost/notes'
   // Dans le cas de mysql
   'mysql://notes_user:1poney2poneys3poneys@localhost/notes'
)

// Un modèle, c'est un objet JS qui est en lien avec une table de BDD
const Message = sequelize.define('Message',{
    title: {
        type: DataTypes.STRING, // VARCHAR(255)
        allowNull: false // NOT NULL 
    },
    body: {
        type: DataTypes.TEXT, // TEXT
        allowNull: true // NULLABLE
    }
})


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