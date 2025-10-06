import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./SidebarComponents.css";

const SidebarComponents = () => {
  const location = useLocation();

  const menus = [
    { title: "Daftar Mitra", path: "/mitra", icon: "📋" },
    { title: "Daftar Produk", path: "/produk", icon: "📦" },
    { title: "Daftar Agent", path: "/agent", icon: "👤" },
    { title: "Transaksi Customer", path: "/transaksi", icon: "💳" },
    { title: "Konten", path: "/konten", icon: "📝" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h5>JagoTrekr</h5>
      </div>

      <Nav className="flex-column sidebar-menu">
        {menus.map((menu, i) => (
          <Nav.Item key={i}>
            <Link
              to={menu.path}
              className={`sidebar-link ${
                location.pathname === menu.path ? "active" : ""
              }`}
            >
              <span className="icon">{menu.icon}</span>
              {menu.title}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default SidebarComponents;
