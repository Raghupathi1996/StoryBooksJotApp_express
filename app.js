require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const passport = require('passport')

// Load User Model
require('./models/user')

// Passport Config
require('./config/passport_google')(passport);

// Load keys
const keys = require('./config/keys')

// Load Routes
const auth = require('./routes/auth')

const app = express();

app.get('/', (req, res) => {
    res.send('It Works!')
})

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