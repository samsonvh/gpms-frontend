export default function Processes({ items }: { items: ProcessesProps[] }) {
  return (
    <>
      {items.map((item: ProcessesProps) => (
        <ul key={item.id}>
          <li>Code: {item.code}</li>
          <li>Name: {item.name}</li>
          <li>Order Number: {item.orderNumber}</li>
          <li>Description: {item.description}</li>
          <ul>
            {item.productionProcessSteps.map(
              (step: ProductionProcessStepsProps) => (
                <li key={step.id}>
                  <h1>
                    <b>Production Process Steps</b>
                  </h1>
                  <p>Step Code: {step.code}</p>
                  <p>Step Name: {step.name}</p>
                  <p>Order Number: {step.orderNumber}</p>
                  <p>Standard Time: {step.standardTime}</p>
                  <p>Output Per Hour: {step.outputPerHour}</p>
                  {step.description && <p>Description: {step.description}</p>}
                  <h1>
                    <b>Process Input & Output Steps</b>
                  </h1>
                  <ul>
                    {step.productionProcessStepIOs.map(
                      (io: ProductionProcessStepIOsProps) => (
                        <li key={io.id}>
                          {io.type && <p>Type: {io.type}</p>}
                          {io.quantity && <p>Quantity: {io.quantity}</p>}
                          {io.consumption && (
                            <p>Consumption: {io.consumption}</p>
                          )}
                          {io.semiFinishedProductName && (
                            <p>
                              Semi Finished Product Name:{" "}
                              {io.semiFinishedProductName}
                            </p>
                          )}
                          {io.semiFinishedProductCode && (
                            <p>
                              Semi Finished Product Code:{" "}
                              {io.semiFinishedProductCode}
                            </p>
                          )}
                          {io.materialName && (
                            <p>Material Name: {io.materialName}</p>
                          )}
                          {io.materialCode && (
                            <p>Material Code: {io.materialCode}</p>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )
            )}
          </ul>
        </ul>
      ))}
    </>
  );
}
