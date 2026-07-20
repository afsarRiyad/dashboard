import adminApi from "./adminApi";

export const getUsers = async () => {
  const { data } = await adminApi.get("/api/admin/users");
  return data;
};

export const makeAdmin = async (id: string) => {
  const { data } = await adminApi.patch(
    `/api/admin/users/${id}/make-admin`
  );

  return data;
};

export const revokeAdmin = async (id: string) => {
  const { data } = await adminApi.patch(
    `/api/admin/users/${id}/revoke-admin`
  );

  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await adminApi.delete(
    `/api/admin/users/${id}`
  );

  return data;
};