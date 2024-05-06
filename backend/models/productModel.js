const mongoose = require("mongoose");
const Review = require("./reviewModel");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});
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
    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
productSchema.index(
  { name: "text", description: "text" },
  { name: "TextIndex" }
);
productSchema.index({ "attrs.key": 1, "attrs.value": 1 });
module.exports = Product;
