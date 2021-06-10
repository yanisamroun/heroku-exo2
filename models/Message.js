// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Message',{
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
