import Gallery from "@/components/shared/gallery/Gallery";
import Link from "next/link";

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
  return (
    <>
      <td className="w-1/5 px-14">
        {imageURLs && <Gallery items={imageURLs} />}
      </td>
      <td className="text-center">{code}</td>
      <td>
        <Link className="hover:text-blue-500" href={`products/${id}`}>
          {name}
        </Link>
      </td>
      <td>{formattedSizes}</td>
      <td>{formattedColors}</td>
      <td>{date.toLocaleDateString("vie-VN")}</td>
      <td>{status}</td>
    </>
  );
}
