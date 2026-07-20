import adminApi from "./adminApi";

export const getOrders = async () => {
  const { data } = await adminApi.get("/api/admin/orders");
  return data;
};

export const getOrder = async (id: string) => {
  const { data } = await adminApi.get(`/api/admin/orders/${id}`);
  return data;
};

export const updateOrderStatus = async (
  id: string,
  status: string
) => {
  const { data } = await adminApi.patch(
    `/api/admin/orders/${id}`,
    { status }
  );

  return data;
};