const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password : {
        type: String,
        required: true,
        minlength: 7
    },
    fName : {
        type: String,
        required: true,
    },
    lName : {
        type: String,
        required: true,
    },
    mobileNumber : {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
}, 
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;