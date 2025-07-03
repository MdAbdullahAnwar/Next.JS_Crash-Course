import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "black", padding: "1rem", color: "white", display: "flex", gap: "1rem" }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
        <footer style={{ background: "black", padding: "1rem", color: "white", textAlign: "center" }}>
          © 2025 Product Store
        </footer>
      </body>
    </html>
  );
}
