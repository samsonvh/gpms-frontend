import ProductItem from "./item";
export default function ProductsList({
  products,
}: {
  products: ProductsListProps;
}) {
  return (
    <table
      id="products"
      className="rounded-sm border mx-5 my-5 space-y-10 text-center"
    >
      <thead>
        <tr>
          <th>Product Images</th>
          <th>Product Code</th>
          <th>Name</th>
          <th>Sizes</th>
          <th>Colors</th>
          <th>Created Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.data.map((product: ProductProps) => (
          <tr key={product.id}>
            <ProductItem {...product} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
