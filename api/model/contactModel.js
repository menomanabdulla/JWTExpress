const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,  
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                return validator.isEmail(v);
            },
            message: '{VALUE} is not a valid Email'
        }
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate: {
            validator: (v) => {
                return /^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(v)
            },
            message: '{VALUE} is not a valid phone number'
        }
    }
});

const Contact =  mongoose.model('Contact', contactSchema);
module.exports = Contact;