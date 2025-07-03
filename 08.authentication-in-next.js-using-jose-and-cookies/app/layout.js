import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <Link href="/">Home</Link> | <Link href="/login">Login</Link> | <Link href="/dashboard">Dashboard</Link>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
