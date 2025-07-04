export async function generateMetadata({params}){
  return{
    "title": `${params.id}'s Post`
  } 
}

export default function PostPage({ params }) {
  return (
    <div>
      <h1>Post Page</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>This post done by: {params.id}</p>
    </div>
  );
}
