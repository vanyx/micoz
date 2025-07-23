import { Outlet, Link, useLocation } from "react-router-dom";
import "./AppLayout.css";

export default function AppLayout() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <div className="layout">
      <main className="content">
        <Outlet />
      </main>

      <nav className="bottom-bar">
        <Link to="/dashboard" className={current === "/dashboard" ? "active" : ""}>🌡️</Link>
        <Link to="/dashcam" className={current === "/dashcam" ? "active" : ""}>📷</Link>
        <Link to="/parametres" className={current === "/parametres" ? "active" : ""}>⚙️</Link>
      </nav>
    </div>
  );
}
