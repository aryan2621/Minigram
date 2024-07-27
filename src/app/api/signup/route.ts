import { connectDatabase } from "@/server/database";
import User from "@/server/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDatabase();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, firstName, password, email, lastName } = body;
        if (!id) {
            return NextResponse.json({ message: "Id is required" }, { status: 400 });
        }
        const [userById, userByEmail] = await Promise.all([
            User.findOne({ id }),
            User.findOne({
                email
            })
        ]);
        if (userById){
            return NextResponse.json({ message: "User with this id already exists" }, { status: 400 });
        }
        if (userByEmail) {
            return NextResponse.json({ message: "User with this email already exists" }, { status: 400 });
        }
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        const newUser = new User({
            id,
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return NextResponse.json({ message: "User signed up successfully" }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({
            message: 'Error while signing up, please try again later'
        }, { status: 500 });
    }
}
