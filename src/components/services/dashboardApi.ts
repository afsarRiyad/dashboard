import adminApi from "./adminApi";

export const getDashboardStats = async () => {
  const { data } = await adminApi.get("/api/admin/stats");
  return data;
};

export const getRecentOrders = async () => {
  const { data } = await adminApi.get("/api/admin/orders/recent");
  return data;
};

export const getSalesChart = async () => {
  const { data } = await adminApi.get("/api/admin/charts/sales");
  return data;
};