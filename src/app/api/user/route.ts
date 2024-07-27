import { connectDatabase } from "@/server/database";
import User from "@/server/model/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDatabase();

export async function GET(request: NextRequest) {
    const token = request.cookies.get('token');
    if (!token) {
        return NextResponse.json({
            message: "Token is missing",
            status: 401
        })
    }
    try {
        const user = jwt.verify(token.value, process.env.JWT_SECRET!);
        const id = (user as any).id;
        const dbUser = await User.findOne({ id: id });
        return NextResponse.json({
            data: dbUser,
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while fetching user",
            status: 401
        })
    }
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('token');
    if (!token) {
        return NextResponse.json({
            message: "Token is missing",
            status: 401
        })
    }
    try {
        const user = jwt.verify(token.value, process.env.JWT_SECRET!);
        const id = (user as any).id;
        const dbUser = await User.findOne({ id: id });

        const body = await request.json();
        const { bio, age, dateOfBirth, profilePic } = body;
        dbUser.bio = bio;
        dbUser.age = age;
        dbUser.dateOfBirth = dateOfBirth;
        dbUser.profilePic = profilePic;

        await dbUser.save();
        return NextResponse.json({
            message: "User updated",
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while updating user",
            status: 500
        })
    }
}