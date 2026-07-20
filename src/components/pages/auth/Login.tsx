import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, User, Shield } from "lucide-react";
import adminLogin from "./adminLogin";

const Login = () => {
  const [errors, setErrors] = useState('')
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const data = await adminLogin(formData);
      
      localStorage.setItem("adminToken", data.data.token);

      if (data.data) {
        localStorage.setItem("adminUser", JSON.stringify(data.user) );
      }

      navigate("/");
    } catch (error: any) {
      setErrors(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-2xl font-bold">Admin Portal</h1>

          <p className="text-muted-foreground mt-2">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border rounded-xl p-6 shadow-sm">
          {errors && <p className="text-sm text-red-500">{errors}</p>}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium"
              >
                Username
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2026 Admin Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;