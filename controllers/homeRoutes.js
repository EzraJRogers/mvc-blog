const router = require('express').Router();
const { User,Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    console.log(req.session)
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Blog,
        },
      ],
    });
    const user = userData.toJSON()
    res.render('home', {user, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard', {logged_in: req.session.logged_in});
});

module.exports = router;
