import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>This is the Blog Page</h1>
      <Link href="/blog">Blog</Link>
      <hr />
      <Link href='/blog/resources'>Resouces</Link>
      <hr/>
      <Link href='/blog/dynamicroute'>Dynamic Route</Link>
      <hr/>
      <Link href='/blog/dynamicroute/seconddynamic'>Dynamic Nested Route</Link>
      <hr/>
      <Link href='/blog/catchallroute'>Catch All Route</Link>
      <hr/>
    </>
  );
}
