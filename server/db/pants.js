const Sequelize = require('sequelize');
const db = require('./database');

const Pants = db.define('pants', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
    },
    description: {
        type:  Sequelize.TEXT
    },
    url: {
        type: Sequelize.TEXT,
        defaultValue: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_10_a06_75828_19446_off_a.jpg'
    },
})
module.exports = Pants;
