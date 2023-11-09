import { NextResponse, NextRequest } from "next/server"

const protectedRoutes = ("/middleware")

export default function middleware(req){
    if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL("/", req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}