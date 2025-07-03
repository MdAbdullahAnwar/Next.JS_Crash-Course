import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode("super-secret-key");

async function generateToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);
}

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "Abdullah" && password === "Abdullah123") {
    const token = await generateToken({ username });

    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: "/",
      sameSite: "strict",
      secure: true,
    });
    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
