import adminApi from "./adminApi";

export const getAdminProfile = async () => {
  const { data } = await adminApi.get("/api/admin/auth/me");
  return data;
};

export const logout = () => {
  localStorage.removeItem("adminToken");
};