const mongoose = require('mongoose');

const PostSchema = mongoose.schema(
    {
        username: {
            type: String,
            required: true
        },

        captions: {
            type: String,
            required: false
        },

        // image: {
        //     type: image,
        //     required: true
        // },

        // tags: {
        //     type: array,
        //     required: true
        // }

    },
    {
        timestamps: true,
    }
);