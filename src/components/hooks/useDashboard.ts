import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardApi";

export const useDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats()
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
};