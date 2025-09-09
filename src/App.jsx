import { BrowserRouter, Route, Routes } from "react-router";
import NavbarComponents from "./components/NavbarComponents";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
            <NavbarComponents />
            <Routes>
                <Route path="/login" element={
                      <Login/>
                } />
                <Route path="*" element={<Error/> } />
            </Routes>


        </BrowserRouter>
  )
}

export default App