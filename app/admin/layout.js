import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="adminLayout">

      <aside className="adminSidebar">

        <Link href="/admin/dashboard" className="adminLogo">
          <img src="/logo-rieti.png" alt="RIETI" />
        </Link>

        <nav className="adminNav">
          <Link href="/admin/dashboard">
            Dashboard
          </Link>

          <Link href="/admin/reportes">
            Bandeja de reportes
          </Link>

          <Link href="/admin/estadisticas">
            Estadísticas y analítica
          </Link>

          <Link href="/admin/accesos">
            Administración de accesos
          </Link>
        </nav>

        <Link href="/" className="adminLogout">
          Cerrar sesión
        </Link>

      </aside>

      <div className="adminArea">

        <header className="adminTopbar">

          <details className="notificationMenu">
            <summary className="notificationButton">
              🔔
              <span className="notificationBadge">2</span>
            </summary>

            <div className="notificationPanel">

              <div className="notificationHeader">
                <strong>Notificaciones</strong>
                <span>2 nuevas</span>
              </div>

              <div className="notificationItem">

                <div className="notificationIcon purple">
                  +
                </div>

                <div>
                  <strong>Nuevo reporte recibido</strong>

                  <p>
                    Se recibió un nuevo reporte en Municipio 1.
                  </p>

                  <small>
                    Hace 10 minutos
                  </small>
                </div>

              </div>

              <div className="notificationItem">

                <div className="notificationIcon turquoise">
                  ✓
                </div>

                <div>
                  <strong>Reporte concluido</strong>

                  <p>
                    El reporte RIETI-M1-2026-000118 fue concluido.
                  </p>

                  <small>
                    Hace 35 minutos
                  </small>
                </div>

              </div>

            </div>
          </details>

          <div className="adminUser">

            <div className="userCircle">
              A
            </div>

            <div>
              <strong>Administrador</strong>
              <small>Panel administrativo</small>
            </div>

          </div>

        </header>

        <main className="adminContent">
          {children}
        </main>

      </div>

    </div>
  );
}