import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the category schema
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    },
    image: {
        type: String, // You can store the URL or path to the image
        required: true
    }
}, {timestamps: true});

// Create the category model
const Category = mongoose.model('Category', categorySchema);

export default Category