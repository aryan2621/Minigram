import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({ message: "Logged out" }, { status: 200 });
        response.cookies.set("token", "", {
            httpOnly: true,
            maxAge: 0,
            expires: new Date(0),
        });
        return response;
    } catch (error) {
        return NextResponse.json({
            message: "Error while logging out, please try again later",
        }, { status: 500 });
    }
}