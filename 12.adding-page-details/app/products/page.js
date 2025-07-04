export const metadata = {
  title: "Products Store - Products List",
};

export default async function ProductsListPage() {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();
  const products = data.products;

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>All Products</h1>
      <ul style={{ lineHeight: "1.6rem" }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
