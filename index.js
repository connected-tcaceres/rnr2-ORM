// CONSTANTS ********************
const {DATABASE, USERNAME, PASSWORD} = require('./data/constants');

// DATABASE ********************
const Sequelize = require('sequelize');

// connection between sequelizer and postgreSQL
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define: {timestamps: false}
});

// User schema for users table
const User = sequelize.define('user', {
  first_name: {
    type: Sequelize.STRING
    // allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  }
});

// Find all users
User.findAll().then((users) => {
  console.log('All users:', JSON.stringify(users, null, 4));
});

// Create a new user
User.create({first_name: 'Tyler', last_name: 'Caceres'})
  .then((user) => {
    console.log('Created entry:', JSON.stringify(user, null, 4));
  })
  .catch((err) => console.log(err));

// BulkCreate new users
User.bulkCreate([
  {first_name: 'Tyler V2', last_name: 'Caceres V2'},
  {first_name: 'Tyler V3', last_name: 'Caceres V3'}
]).then((user) => console.log('Created entry:', JSON.stringify(user, null, 4)));

// Delete everyone named "Ash"
User.destroy({
  where: {first_name: 'ash'}
}).then(() => console.log('Entry deleted.'));

// Change everyone with first name 'gary' to 'gerald'
User.update(
  {first_name: 'gerald'},
  {
    where: {
      first_name: 'gary'
    }
  }
).then(() => console.log('User updated.'));
