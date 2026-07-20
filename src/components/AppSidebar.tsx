import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  ShoppingBag,
  Boxes,
  Tags,
  Users,
  ClipboardList,
  CreditCard,
  BarChart3,
  Settings,
  ShieldCheck,
  Layers,
  Inbox ,
  User,
  ChevronUp,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { logout } from "./services/authApi";

export const sidebarMenu = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
      },
    ],
  },
  {
    title: "Catalog",
    items: [
      {
        title: "Products",
        icon: ShoppingBag,
        href: "/products",
      },
      {
        title: "Categories",
        icon: Tags,
        href: "/categories",
      },
      {
        title: "Product Attributes",
        icon: Layers,
        href: "/product-attributes",
      },
      {
        title: "Inventory",
        icon: Boxes,
        href: "/inventory",
      },
    ],
  },
  {
    title: "Sales",
    items: [
      {
        title: "Orders",
        icon: ClipboardList,
        href: "/orders",
      },
      {
        title: "Customers",
        icon: Users,
        href: "/customers",
      },
      {
        title: "Inbox",
        icon: Inbox  ,
        href: "/d",
        badge: 32
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        title: "Payments",
        icon: CreditCard,
        href: "/payments",
      },
      {
        title: "Analytics",
        icon: BarChart3,
        href: "/analytics",
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Users",
        icon: Users,
        href: "/users",
      },
      {
        title: "Admin Management",
        icon: ShieldCheck,
        href: "/admin",
      },
      {
        title: "Settings",
        icon: Settings,
        href: "/settings",
      },
    ],
  },
];

const AppSidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () =>{
  logout();
  navigate('/login', {replace: true});
} 
  return (
    <Sidebar collapsible='icon' className="overflow-hidden">
      <SidebarHeader>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src="/avatars/john.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            John Doe
          </span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarHeader>
             <SidebarSeparator />
      <SidebarContent>
        {sidebarMenu.map((group)=>(
          <SidebarGroup key={group.title}>
            
           <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
             
             <SidebarMenu>
               {group.items.map((item)=>(
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton render={<Link to={item.href} />}>
                    <item.icon/>
                    <span>{item.title}</span>
                    {item.badge && 
                     <SidebarMenuBadge className="text-red-600 border">{item.badge}</SidebarMenuBadge>
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
               ))}
             </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter >
        <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <SidebarMenuButton  render={<DropdownMenuTrigger/>} size="lg">
                  <User/>
                     <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                John Doe
              </span>
              <span className="truncate text-xs text-muted-foreground">
                sdfsdf
              </span>
            </div>

            <ChevronUp className="ml-auto h-4 w-4" />
            </SidebarMenuButton >
               <DropdownMenuContent align="end" className="w-1/2">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive" onClick={handleLogout}>Sign Out</DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      </SidebarFooter >
    </Sidebar>
  )
}

export default AppSidebar
