const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const eventData = await Blog.findAll();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newEvent= await Blog.create({...req.body, user_id: req.session.user_id});
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;