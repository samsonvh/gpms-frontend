export default function Specifications({
  items,
}: {
  items: SpecificationsProps[];
}) {
  return (
    <>
      {items.map((item: SpecificationsProps) => (
        <ul key={item.id}>
          <li>Size: {item.size}</li>
          <li>Color: {item.color}</li>
          <li>Inventory Quantity: {item.inventoryQuantity}</li>
          <li>Product Name: {item.productName}</li>
          <li>Product Code: {item.productCode}</li>
          <li>Size: {item.size}</li>
          <h1>
            <b>Measurements</b>
          </h1>
          <ul>
            {item.measurements.map((me: MeasurementsProps) => (
              <li key={me.id}>
                <p>Name: {me.name}</p>
                <p>Measure: {me.measure}</p>
                <p>Unit: {me.unit}</p>
              </li>
            ))}
          </ul>
          <h1>
            <b>Bill Of Materials</b>
          </h1>
          {item.billOfMaterials.map((bill: BillOfMaterialsProps) => (
            <li key={bill.id}>
              <p>{bill.sizeWidth}</p>
              <p>{bill.consumption}</p>
              {bill.description && <p>{bill.description}</p>}
              <p>{bill.material.code}</p>
              <p>{bill.material.colorName}</p>
              <p>{bill.material.colorCode}</p>
              <p>{bill.material.name}</p>
              <p>{bill.material.consumptionUnit}</p>
              <p>{bill.material.sizeWidthUnit}</p>
              {bill.material.description && <p>{bill.material.description}</p>}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}
