export async function generateMetadata({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
  };
}

export default async function ProductPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem" }}>{product.title}</h1>
      
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          marginBottom: "1rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
        }}
      />

      <p style={{ lineHeight: "1.6rem", fontSize: "1.1rem" }}>
        {product.description}
      </p>

      <p style={{ marginTop: "1rem", fontWeight: "bold", fontSize: "1.2rem" }}>
        Price: ${product.price}
      </p>
    </div>
  );
}
