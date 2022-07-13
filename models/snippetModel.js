const mongoose = require("mongoose");
const { v4 } = require("uuid");

const snippetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Unnamed Snippet"
    },

    description: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    input: {
        type: String
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const Snippet = mongoose.model('snippet', snippetSchema);
module.exports = Snippet;