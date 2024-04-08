const mongoose = require('mongoose');

const AccountSchema = mongoose.schema(
    {
        firstName:{
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: false
        },
        
        username: {
            type: String,
            required: [true, "Please enter your username"]
        },

        password: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        
    },
    {
        timestamps: true,
    }
);