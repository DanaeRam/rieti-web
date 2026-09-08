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
          <Link href="/admin/reportes">Reportes</Link>
          <Link href="/admin/analitica">Analítica</Link>
          <Link href="/admin/usuarios">Usuarios</Link>
        </nav>

        <Link href="/" className="adminLogout">
          Cerrar sesión
        </Link>

      </aside>

      <main className="adminMain">
        {children}
      </main>

    </div>
  );
}