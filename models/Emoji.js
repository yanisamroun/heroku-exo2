// DataTypes est à importer dans chaque fichier de modèle
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('Emoji', {
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
