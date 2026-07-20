import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AppSidebar from "../AppSidebar";
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";

export function RootLayout() {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <SidebarInset className="flex flex-col min-w-0">
        <Navbar />

        <main className="flex-1 min-h-0 overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}