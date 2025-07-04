export default async function ProductDetail({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <img src={product.thumbnail} width={200} />
    </div>
  );
}
