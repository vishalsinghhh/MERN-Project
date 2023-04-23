const mongoose = require("mongoose");

const SampleDataSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            unique:true,
            required:true
        },
        first_name:{
            type: String,
            required: true
        },
        last_name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique:true,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        income:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        car:{
            type: String,
            required: true
        },
        quote:{
            type: String,
            required: true
        },
        phone_price:{
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('SampleData', SampleDataSchema)