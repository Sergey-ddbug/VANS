const passport = require('passport');

const LocalStrategy = require('./localStrategy');

passport.serializeUser(function (user, done) {
  done(null, { id: user.id, email: user.email, first_name: user.first_name });
});

passport.deserializeUser(function (user, done) {
  done(null, { id: user.id, email: user.email, first_name: user.first_name });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
