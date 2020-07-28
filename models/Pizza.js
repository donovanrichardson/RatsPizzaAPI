const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const PizzaSchema = new Schema(
  {
    name: String,
    toppings: [String],
  },
  { timestamps: true }
);
const Pizza = model('pizza', PizzaSchema)
module.exports = Pizza

// "5f203f3b31cf9d9d20b6fae0"