import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
    content:{
        type: String,
        required: true,
        unique: true,
        
    },
    creatername:{
        type: String,
        required: true,
    },
    createremail:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
},{timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);
