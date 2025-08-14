const mongoose = require('mongoose');
const validator = require('validator');

let firstSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        uppercase:true
    },
    email: {
        type:String,
        require:true,
        validate:{
            validator: (value) => validator.isEmail(value),
            message: 'invalid email address'
        }
    },
    password: {
        type:String,
        require:true,
        validate: {
            validator: (value) => validator.isStrongPassword(value),
            message: 'invalid password must be strong (min 8 chars, uppercase, lowercase, numbers, symbols).'
        }
    }
});


module.exports = mongoose.model('firstModel', firstSchema); 