import axios from "axios";

const adminLogin = async (formData: object | null) => {
  const { data } = await axios.post(
    "https://electrobackend-1.onrender.com/api/admin/auth/login",
    formData
  );

  return data;
};

export default adminLogin;