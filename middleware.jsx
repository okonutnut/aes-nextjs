import { NextResponse } from 'next/server'
import { useAtom } from 'jotai'
import { sessionUser } from './libs/atom'

export async function middleware(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/',
}