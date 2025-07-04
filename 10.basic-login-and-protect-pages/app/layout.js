import './globals.css';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default function RootLayout({ children }) {
  const isLoggedIn = cookies().get('token')?.value === 'authenticated';

  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#ddd', display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {isLoggedIn ? (
            <a href="/api/logout">Logout</a>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
