const mongoose = require("mongoose");

//Create mongodb schema for products
const AppSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Products", AppSchema);
