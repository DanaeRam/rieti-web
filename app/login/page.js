"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  function ingresar(event) {
    event.preventDefault();
    router.push("/admin/dashboard");
  }

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
            href="/"
            className="adminButton"
          >
            ← Volver
          </Link>

        </div>
      </header>

      <section className="loginSection">

        <div className="loginInfo">

          <span>RIETI · ADMINISTRACIÓN</span>

          <h1>
            Acceso
            <br />
            administrativo
          </h1>

          <p>
            Ingresa al portal administrativo de RIETI
            para gestionar los reportes y la información
            de la plataforma.
          </p>

        </div>

        <div className="loginCard">

          <h2>Iniciar sesión</h2>

          <p>
            Ingresa tu usuario y contraseña para continuar.
          </p>

          <form onSubmit={ingresar}>

            <label htmlFor="usuario">
              Usuario
            </label>

            <input
              id="usuario"
              type="text"
              placeholder="Usuario"
            />

            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="*******"
            />
            <button
              type="submit"
              className="loginButton"
            >
              Ingresar
            </button>
          </form>
        </div>

      </section>

    </main>
  );
}