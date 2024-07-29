import ProductItem from "../item";

export default function ProductsList({
  products,
}: {
  products: ProductsListProps | null;
}) {
  return (
    <table id="table" className="w-full">
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
        {products?.data.map((product: ProductProps) => (
          <tr key={product.id}>
            <ProductItem {...product} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
