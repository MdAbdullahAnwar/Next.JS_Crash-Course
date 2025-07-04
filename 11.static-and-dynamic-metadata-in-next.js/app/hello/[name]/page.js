export const metadata = {
  title: 'Hello Page', 
}

export default function PostPage({ params }) {
  return (
    <div>
      <h1>Hello Page</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>This is the Hello Page for ID: {params.name}</p>
    </div>
  );
}
