const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscriberID:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subscriptionDate:{
        type: String,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('users', subscriberSchema)