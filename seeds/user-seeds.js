const { User } = require('../models');

const userdata = [
  {
    id: 1,
    email: 'deez8@yahoo.com',
    password: 'pass',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
