import { get, post, del, patch } from "../utils/request";

export const getProductList = async () => {
  try {
    const result = await get("products");
    return result;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};

export const createProduct = async (options) => {
  try {
    const result = await post("products", options);
    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const result = await del(`products/${id}`);
    return result;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const editProduct = async (id, option) => {
  try {
    const result = await patch(`products/${id}`, option);
    return result;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};
