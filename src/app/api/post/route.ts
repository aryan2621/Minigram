import { connectDatabase } from "@/server/database";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/server/model/user";
import Post from "@/server/model/post";

connectDatabase();

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.json({
                message: "Token is missing",
                status: 401,
            });
        }

        const user = jwt.verify(token.value, process.env.JWT_SECRET!);
        const id = (user as any).id;
        const dbUser = await User.findOne({ id: id });

        if (!dbUser) {
            return NextResponse.json({
                message: "User not found",
                status: 404,
            });
        }

        const body = await request.json();
        const { postId, title, description, category, imageUri } = body;

        // Basic validation
        if (!postId || !title || !description || !category) {
            return NextResponse.json({
                message: "Missing required fields",
                status: 400,
            });
        }

        dbUser.postIds.push(postId);
        const post = new Post({
            postId,
            title,
            description,
            category,
            createdBy: dbUser.id,
            imageUri,
        });

        const promises = [post.save(), dbUser.save()];
        await Promise.all(promises);

        return NextResponse.json({
            message: "Post created successfully",
            status: 200,
        });
    } catch (error) {
        console.error("Error while creating post:", error);
        return NextResponse.json({
            message: "Error while creating post",
            status: 500,
        });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.json({
                message: "Token is missing",
                status: 401,
            });
        }

        const user = jwt.verify(token.value, process.env.JWT_SECRET!);
        const id = (user as any).id;
        const dbUser = await User.findOne({ id: id });

        if (!dbUser) {
            return NextResponse.json({
                message: "User not found",
                status: 404,
            });
        }

        const body = await request.json();
        const { postId } = body;

        const post = await Post.findOne({ postId });

        if (!post) {
            return NextResponse.json({
                message: "Post not found",
                status: 404,
            });
        }

        if (post.createdBy !== dbUser.id) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401,
            });
        }
        const promises = [];
        promises.push(post.deleteOne({ postId }));
        promises.push(dbUser.updateOne({ $pull: { postIds: postId } }));
        await Promise.all(promises);

        return NextResponse.json({
            message: "Post deleted successfully",
            status: 200,
        });
    } catch (error) {
        console.error("Error while deleting post:", error);
        return NextResponse.json({
            message: "Error while deleting post",
            status: 500,
        });
    }
}
