import { connectDatabase } from "@/server/database";
import { NextRequest, NextResponse } from "next/server";
import User from "@/server/model/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connectDatabase();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }
        const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET!, { expiresIn: "1d" });

        const response = NextResponse.json({ token }, { status: 200 });

        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 86400,
            expires: new Date(Date.now() + 86400),
        });
        return response;
    } catch (error) {
        return NextResponse.json({
            message: "Error while signing in, please try again later",
        }, { status: 500 });
    }
}