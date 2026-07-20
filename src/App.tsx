import { Routes, Route } from "react-router-dom"
import { RootLayout } from "@/components/layouts/root-layout"
import Home from './components/Home';
import Login from "./components/pages/auth/Login";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route  element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  )
}
export default App
