import Link from "next/link";

export default function Home() {
  return (
    <main className="rietiPage">
      <header className="mainHeader">
        <div className="headerContent">
          <Link href="/" className="logo">
            <img
              src="/logo-rieti.png"
              alt="RIETI"
            />
          </Link>

          <Link
            href="/login"
            className="adminButton">
            Acceso Admin
          </Link>
        </div>

      </header>

      <section className="heroSection">
        <div className="heroOverlay">
          <div className="heroButtons">
            <Link
              href="/reporte"
              className="heroButton primaryButton">
              Reportar caso
            </Link>

            <Link
              href="/seguimiento"
              className="heroButton secondaryButton">
              Seguimiento
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}