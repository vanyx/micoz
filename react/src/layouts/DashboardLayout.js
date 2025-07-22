import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Mon Dashboard</h2>
        <nav>
          <Link to="/dashboard">Accueil</Link>
        </nav>
      </aside>
      <main className="content">
        <Outlet /> {/*contenu des pages enfants*/}
      </main>
    </div>
  );
}
