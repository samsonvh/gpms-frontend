
const formSections = [
  { pos: 0, header: "Product definition" },
  { pos: 1, header: "Product specification" },
  { pos: 2, header: "Production processes" },
];

const ProductFormHeader = ({
  currentSectionPos,
  changePos,
}: {
  currentSectionPos: number;
  changePos: (isNext: boolean) => void;
}) => {
  return (
    <div id="form-header">
      <h2>{formSections[currentSectionPos].header}</h2>
      <div className="flex items-end gap-4">
        <button
          className={"font-bold " + (currentSectionPos == 0 ? "hidden" : "")}
          onClick={() => changePos(false)}
        >
          previous
        </button>
        <div className="flex gap-8">
          {formSections.map((section) => (
            <div
              key={section.pos}
              className={
                "w-20 h-4 " +
                (currentSectionPos == section.pos
                  ? "bg-cyan-300"
                  : "border shadow-inner")
              }
            />
          ))}
        </div>
        <button
          className={"font-bold " + (currentSectionPos == 2 ? "hidden" : "")}
          onClick={() => changePos(true)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ProductFormHeader;
