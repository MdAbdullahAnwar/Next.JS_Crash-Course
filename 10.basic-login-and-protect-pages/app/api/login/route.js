import { NextResponse } from 'next/server';

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === 'admin' && password === 'password123') {
    const res = NextResponse.redirect(new URL('/products', req.url));
    res.cookies.set('token', 'authenticated', {
      httpOnly: true,
      maxAge: 60 * 60,
      path: '/',
    });
    return res;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
