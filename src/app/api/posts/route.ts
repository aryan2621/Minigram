import { connectDatabase } from "@/server/database";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Post from "@/server/model/post";

connectDatabase();

export async function GET(request: NextRequest) {
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
      const posts = await Post.find({ createdBy: id });
      return NextResponse.json({
         message: "Posts fetched successfully",
         status: 200,
         data: posts,
      });
   } catch (error) {
      return NextResponse.json({
         message: "Error while fetching posts",
         status: 500,
      });
   }
}
