import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import NavbarComponents from "./components/NavbarComponents";
import SidebarComponents from "./components/SidebarComponents";
import Login from "./pages/Login";
import DaftarMitra from "./pages/DaftarMitra";
// import Error from "./pages/Error"; // pastikan kamu punya komponen ini

function LayoutWithNavbarSidebar({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <SidebarComponents />
      <div style={{ flex: 1, marginLeft: "220px" }}>
        <NavbarComponents />
        <div>{children}</div>
      </div>
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();

  // cek apakah sedang di halaman login
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {isLoginPage ? (
        // jika di halaman login, tampilkan hanya halaman login
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        // jika bukan login, tampilkan navbar + sidebar
        <LayoutWithNavbarSidebar>
          <Routes>
            <Route path="/mitra" element={<DaftarMitra />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </LayoutWithNavbarSidebar>
      )}
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
