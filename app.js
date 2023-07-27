require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const connectDB = require('./db/connect')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

// Load User Model
require('./models/user')

// Passport Config
require('./config/passport_google')(passport);

// Load keys
const keys = require('./config/keys')

// Load Routes
const index = require('./routes/index')
const auth = require('./routes/auth')

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({
    defaultLayout:'main'
}))
app.set('view engine', 'handlebars')

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
res.locals.user = req.user || null;
next();
});

app.use('/', index)
app.use('/auth', auth)


const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(keys.mongoURI)
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    } catch (error) {
        console.log (error)
    }
}

start()