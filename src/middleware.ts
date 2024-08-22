import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "http://localhost:3000"
export function middleware(req: NextRequest) {
    const currentPath = req.nextUrl.pathname;
    const isPublic = currentPath === "/login";
    if (currentPath === "/") {
        return NextResponse.redirect(new URL("/login", BASE_URL))
    }

    // retriving the token to see if user is logged in 
    const cookieStore = cookies();
    const token = cookieStore?.get('token')?.value || "";

    // if its a public route and they are logged in we want to navigate away
    if (isPublic && token !== "") {
        return NextResponse.redirect(new URL("/", BASE_URL));
    }

    if (!isPublic && token === "") {
        return NextResponse.redirect(new URL("/login", BASE_URL));
    }
    return NextResponse.next();

    
}

export const config = {
    matcher: ["/", "/login", "/dashboard(.*)"]
}