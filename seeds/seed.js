const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedBlog = require('./blogSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlog();

  process.exit(0);
};

seedAll();
