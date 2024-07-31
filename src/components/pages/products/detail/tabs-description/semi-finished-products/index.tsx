export default function SemiFinishedProducts({
  items,
}: {
  items: SemiFinishedProductsProps[];
}) {
  return (
    <>
      {items.map((item: SemiFinishedProductsProps) => (
        <ul className="border sp-y-4" key={item.id}>
          <li>Code: {item.code}</li>
          <li>Name: {item.name}</li>
          <li>Quantity: {item.quantity}</li>
          <li>Description: {item.description}</li>
        </ul>
      ))}
    </>
  );
}
