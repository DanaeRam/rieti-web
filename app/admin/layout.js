import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="adminLayout">
      <aside className="adminSidebar">
        <Link href="/admin/dashboard" className="adminLogo">
          <img src="/logo-rieti.png" alt="RIETI" />
        </Link>

        <nav className="adminNav">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/reportes">Bandeja de reportes</Link>
          <Link href="/admin/estadisticas">Estadísticas y analítica</Link>
          <Link href="/admin/accesos">Administración de accesos</Link>
        </nav>

        <Link href="/" className="adminLogout">
          Cerrar sesión
        </Link>
      </aside>

      <main className="adminContent">
        {children}
      </main>
    </div>
  );
}