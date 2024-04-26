const { Blog } = require('../models');

const blogData = [
  {
    id: 1,
    event_name: 'edc',
    artist_name: 'marshmellow',
    event_time: '05/13/2024',
    stage_time: '7PM',
    description: 'travis scott energy',
    user_id: 1,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
