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
        type: DataTypes.STRING(150), // VARCHAR(255)
        allowNull: false // NOT NULL 
    },
    body: {
        type: DataTypes.TEXT, // TEXT
        allowNull: true // NULLABLE
    }
}, {
    // Nommer la table en minuscule et au singulier
    tableName: 'message',
    // createdAt -> created_at
    underscored: true
})

const Category = sequelize.define('Category', {
   name: {
       type: DataTypes.STRING(60),
       allowNull: false
   } 
}, {
    tableName: 'category',
    underscored: true
})

// One To Many | Many To One
// Une catégorie peut être associé à plusieurs messages
Category.hasMany(Message);
// Un message peut être lié à une seule catégorie
Message.belongsTo(Category);



const Emoji = sequelize.define('Emoji', {
    icon: {
        type: DataTypes.STRING,
        allowNull: false 
    }
},
 {
     tableName: 'emoji',
     underscored: true,
     // timestamps: false  -> si on veut enlever le created_at ...
 })


// Un message peut avoir plusieurs émojis
Message.belongsToMany(Emoji, {through: "message_emoji"})
// Un émoji peut être dans plusieurs messages
Emoji.belongsToMany(Message, {through: "message_emoji"})

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