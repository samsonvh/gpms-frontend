import { apiV1, serverUri } from "@/others/urls/server";
import { Category } from "@/types/product";
import axios from "axios";

type GetCategoriesType = () => Promise<Category[]>;

export const getAllCategories: GetCategoriesType = async () => {
  let categories: Category[] = [];
  let url = `${serverUri}${apiV1}/categories`;

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
