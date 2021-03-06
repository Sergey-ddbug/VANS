const express = require('express');

const User = require('../../models').User;
const passport = require('../../passport');
const { isValidEmail, isValidPassword } = require('../../utilities/authUtils');

const router = express.Router();

router.get('/', async (req, res) => {
  if (req.user) {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    if (user) {
      req.session.user = user;
      console.log("USER", user)
      res.json({ user });
      return;
    }

    res.status(404).json({ status: 'error', message: 'User not found' });
  } else {
    res.json({ user: null });
  }
});

router.post('/signup', async function (req, res, next) {
  let user = {};

  user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    res
      .status(400)
      .json({ message: `Sorry, a user is already using that email: ${req.body.email}` });
    return;
  }
  if (!isValidPassword(req.body.password)) {
    return res
      .status(400)
      .json({ status: 'error', message: 'Password must be 8 or more characters.' });
  }

  if (!isValidEmail(req.body.email)) {
    return res
      .status(400)
      .json({ status: 'error', message: 'Email address not formed correctly.' });
  }

  try {
    console.log(req.body)
    user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      role: 'user',
      password: req.body.password
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: 'error', message: 'Email address already exists.' });
  }

  if (user) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({ status: 'error', message: info.message });
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json({ status: 'ok' });
      });
    })(req, res, next);
  }
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.json({ status: 'error', message: info.message });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.json({ status: 'ok', ...user });
    });
  })(req, res, next);
});

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

module.exports = router;
