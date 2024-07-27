import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname?.toLowerCase();
    const isPublicPath =
        path === "/login" || path === "/logout" || path === "/signup";

    const token = request.cookies.get("token");
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl).toString());
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(
            new URL("/login", request.nextUrl).toString()
        );
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/logout',
        '/profile',
    ]
}