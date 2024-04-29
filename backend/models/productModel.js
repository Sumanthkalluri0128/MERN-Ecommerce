const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    count: {
      type: "Number",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    rating: {
      type: "number",
    },
    reviewNumber: {
      type: "number",
    },
    sales: {
      type: "number",
      default: 0,
    },
    attrs: [{ key: { type: "string", value: { type: "string" } } }],
    images: [],
    reviews: [],
  },
  {
    timestamps: true,
  }
);
productSchema.index();
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
