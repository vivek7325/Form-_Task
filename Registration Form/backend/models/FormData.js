const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    
    name : {
        type:String,
        required:true,
        minlength: 3,
    },
    email: {
        type:String,
        required:true,
        minlength: 5,
    },
    password: {
        type:String,
        required:true,

    },
    dob: {
        type: Date,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const FormData = mongoose.model('log_reg_form', UserData);

module.exports = FormData;