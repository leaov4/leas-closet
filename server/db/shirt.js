const Sequelize = require('sequelize');
const db = require('./database');

const Shirt = db.define('shirt', {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type:  Sequelize.TEXT
    },
    url: {
        type: Sequelize.TEXT,
        defaultValue: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_07_a03_74147_3030_on_c.jpg'
    },
})
module.exports = Shirt;
