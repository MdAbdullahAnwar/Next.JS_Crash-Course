import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode("super-secret-key");

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (e) {
    return null;
  }
}

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  const user = token ? await verifyToken(token) : null;

  if (!user) return <h1>Access Denied</h1>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <a href="/logout">Logout</a>
    </div>
  );
}
