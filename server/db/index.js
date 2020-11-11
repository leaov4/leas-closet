const db = require('./database')
const Pants = require('./pants')
const Shirt = require('./shirt')

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

// Student.belongsTo(Campus);
// Campus.hasMany(Student);

module.exports = {
  db,
  Pants,
  Shirt
}