const { Schema, model } = require('mongoose');

const pollSchema = new Schema({
    title : {
        type : String,
        trim : true,
        required : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    totalVote : {
        type : Number,
        default : 0
    },
    options: [{
        name: {
            type: String,
            required: true
        },
        vote: {
            type: Number,
            default: 0
        }
    }]
});

const Poll = model('Poll', pollSchema);
module.exports = Poll;