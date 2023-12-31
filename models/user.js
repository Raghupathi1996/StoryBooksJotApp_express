const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
    googleID:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
})

mongoose.model('users', UserSchema)