const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: "" },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }
);
module.exports=model("Item",itemSchema);