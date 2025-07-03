export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <img src={product.thumbnail} alt={product.title} width="300" />
    </div>
  );
}
