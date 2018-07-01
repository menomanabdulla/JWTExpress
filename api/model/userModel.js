const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        validate: {
            validator: (v) => {
                return validator.isEmail(v);
            },
            message: '{VALUE} is not a valid Email'
        }
    },
    password: {
        type: String,
        required: true,
        
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;