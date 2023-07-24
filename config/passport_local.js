const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')


module.exports = function(passport) {
    passport.use(new LocalStrategy)({usernameField: 'email'},
    (email, passport, done) => {
        
    })
}