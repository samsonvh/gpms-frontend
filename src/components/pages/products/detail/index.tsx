import Gallery from "@/components/shared/gallery/Gallery";
import TabsDescription from "./tabs-description";

export default function ProductDetail({
  product,
}: {
  product: ProductDetailProps;
}) {
  const formattedColors = product.colors.join(", ");
  const formattedSizes = product.sizes.join(", ");
  const date = new Date(product.createdDate);
  return (
    <>
      <div className="flex space-x-20 py-10">
        <div className="pl-16 space-y-5">
          {product.imageURLs && <Gallery items={product.imageURLs} />}
          {product.description && (
            <p className="text-2xl">{product.description}</p>
          )}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl ">{product.name}</h1>
          <p>
            Code {product.category.name}: {product.code}
          </p>
          <p>Colors: {formattedColors}</p>
          <p>Sizes: {formattedSizes}</p>
          <p>Product Status: {product.status}</p>
          <p>Creator: {product.creatorName}</p>
          {product.reviewerName && <p>Reviewer: {product.reviewerName}</p>}
          <p>Created Date: {date.toLocaleDateString("vie-VN")}</p>
        </div>
      </div>
      <TabsDescription product={product} />
    </>
  );
}
