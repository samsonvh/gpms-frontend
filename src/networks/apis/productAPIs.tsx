import { Category } from "@/types/product";
import axios from "axios";

type GetCategoriesType = () => Promise<Category[]>;

export const getAllCategories: GetCategoriesType = async () => {
  let categories: Category[] = [];
  let url = `${process.env.NEXT_PUBLIC_BACKEND_HOST_HTTP}${process.env.NEXT_PUBLIC_API_VERSION_1}/categories`;

  if (url) {
    await axios
      .get(url)
      .then((response) => {
        categories = response.data.data;
      })
      .catch((error) => console.log(error));
  }

  return categories;
};
