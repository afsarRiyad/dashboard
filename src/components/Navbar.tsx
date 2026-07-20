import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import {
  LogOutIcon,
  Moon,
  PanelLeft,
  PanelLeftClose,
  SettingsIcon,
  Sun,
  UserIcon,
} from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"
import { logout } from "./services/authApi"
import { Link, useNavigate } from "react-router-dom"



const Navbar = () => {
  const navigate = useNavigate()
    const { setTheme } = useTheme()
      const { toggleSidebar, open } = useSidebar()
      const handleClick = () =>{
  logout();
  navigate("/login", {replace: true});
}

  return (
    <>
      <div className=" flex w-full justify-between h-20 items-center px-4" >
  
            <button onClick={toggleSidebar}> {open ? <PanelLeftClose /> : <PanelLeft />}</button>

        <div className="flex gap-5 items-center">
            <Link to='/'>Dashboard</Link>
            {/* dark Mode  */}
                    <DropdownMenu>
            <DropdownMenuTrigger >
                <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
           {/* avatar  */}
                <DropdownMenu >
             <DropdownMenuTrigger  >
                <Button variant="outline">
                    <Avatar>
               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
               <AvatarBadge className="bg-green-600 dark:bg-green-800" />
             </Avatar>
                </Button>
                </DropdownMenuTrigger >
             <DropdownMenuContent align="end" sideOffset={6}>
                <DropdownMenuItem className="mb-1" disabled>
                    My Account
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="mb-1">
                    <UserIcon />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem >
                <DropdownMenuItem variant="destructive" className="mb-1" onClick={handleClick}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </>
  )
}

export default Navbar
