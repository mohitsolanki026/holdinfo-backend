const mongoose = require("mongoose");


const DataSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    value:{
        name: {
            type: String,
        },
        last: {
            type: Number,
        },
        buy: {
            type: Number,
        },
        sell: {
            type: Number,
        },
        volume: {
            type: Number,
        },
        base_unit: {
            type: String,
        },
    }
});

module.exports = mongoose.model("Data", DataSchema); // Use lowercase 'model' here
