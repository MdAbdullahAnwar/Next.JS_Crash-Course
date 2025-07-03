export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products')

  const data = await res.json();
  const products = data.products;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
