import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: [true,"Post ID is required"],
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    createdBy: {
        type: String,
        required: [true, "Created By is required"],
    },
    imageUri: {
        type: String,
        required: [true, "Image is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
