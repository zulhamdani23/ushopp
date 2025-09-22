import { BrowserRouter, Route, Routes } from "react-router";
import NavbarComponents from "./components/NavbarComponents";
import Login from "./pages/Login";
import SidebarComponents from "./components/SidebarComponents";
import DaftarMitra from "./pages/DaftarMitra";

const App = () => {
  return (
    <BrowserRouter>
        {/* <NavbarComponents /> */}
          {/* <SidebarComponents/> */}
        <Routes>
            <Route path="/login" element={
              <Login/>
            } />
            <Route path="/mitra" element={
              <DaftarMitra/>
            } />
            
            <Route path="*" element={<Error/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App