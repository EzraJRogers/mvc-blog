const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedEvents();

  process.exit(0);
};

seedAll();
