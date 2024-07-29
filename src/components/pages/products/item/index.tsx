import Gallery from "@/components/shared/gallery/Gallery";
import React from "react";

export default function ProductItem({
  code,
  colors,
  createdDate,
  id,
  imageURLs,
  name,
  sizes,
  status,
}: ProductProps) {
  const date = new Date(createdDate);
  const formattedColors = colors.join(", ");
  const formattedSizes = sizes.join(", ");

  console.log(colors);
  return (
    <>
      {imageURLs?.length === 1 ? (
        <td></td>
      ) : (
        <td>
          <Gallery items={imageURLs} />
        </td>
      )}
      <td>{code}</td>
      <td>{name}</td>
      <td>{formattedSizes}</td>
      <td>{formattedColors}</td>
      <td>{date.toLocaleDateString("vie-VN")}</td>
      <td>{status}</td>
    </>
  );
}
