import { NextResponse } from 'next/server';

export async function GET(req) {
  const res = NextResponse.redirect(new URL('/login', req.url));
  res.cookies.set('token', '', { maxAge: 0, path: '/' });
  return res;
}
