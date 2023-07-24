const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.Promise = global.Promise;
    const return_db = mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
    return return_db
}

module.exports = connectDB