import { NextResponse } from 'next/server'

export async function middleware(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/',
}