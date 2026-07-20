import adminApi from "./adminApi";

export const getProducts = async () => {
  const { data } = await adminApi.get("/api/admin/products");
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await adminApi.get(`/api/admin/products/${id}`);
  return data;
};

export const createProduct = async (product: any) => {
  const { data } = await adminApi.post(
    "/api/admin/products",
    product
  );

  return data;
};

export const updateProduct = async (
  id: string,
  product: any
) => {
  const { data } = await adminApi.put(
    `/api/admin/products/${id}`,
    product
  );

  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await adminApi.delete(
    `/api/admin/products/${id}`
  );

  return data;
};