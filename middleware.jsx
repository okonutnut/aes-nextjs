import { NextResponse } from 'next/server'
import { useAtom } from 'jotai'
import { sessionUser } from './libs/atom'

export async function middleware(request) {
  const [user] = useAtom(sessionUser)
  if(user == null)
    return NextResponse.redirect(new URL('/login', request.url))
  else
    return NextResponse.redirect(new URL("/dashboard", request.url));
}

export const config = {
  matcher: '/',
}