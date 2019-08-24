// CONSTANTS ********************
const {PORT, DATABASE, USERNAME, PASSWORD} = require('./data/constants');

// IMPORTS ********************
const express = require('express');
const app = express();

// DATABASE ********************
const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define: {timestamps: false}
});

// APP INITIALIZATION ********************
// app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('hello world');
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

const User = sequelize.define('user', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  }
});

// // Find all users
// User.findAll().then((users) => {
//   console.log('All users:', JSON.stringify(users, null, 4));
// });

// Create a new user
User.create({first_name: 'Tyler', last_name: 'Caceres'})
  .then((res) => {
    console.log('Created entry:', res);
  })
  .catch((err) => console.log(err));

// // Delete everyone named "Jane"
// User.destroy({
//   where: {
//     first_name: 'Jane'
//   }
// }).then(() => {
//   console.log('Done');
// });

// // Change everyone without a last name to "Doe"
// User.update(
//   {last_name: 'Doe'},
//   {
//     where: {
//       last_name: null
//     }
//   }
// ).then(() => {
//   console.log('Done');
// });

// SERVER INITIALIZATION********************
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
