"use client";

import { useState } from "react";
import Link from "next/link";

export default function Seguimiento() {
  const [folio, setFolio] = useState("");
  const [reporte, setReporte] = useState(null);
  const [error, setError] = useState("");

  function consultarReporte(event) {
    event.preventDefault();

    const folioIngresado = folio.trim().toUpperCase();

    setError("");
    setReporte(null);

    if (folioIngresado === "RIETI-ATZ-2026-000123") {
      setReporte({
        folio: folioIngresado,
        estado: "En revisión",
      });
    } else {
      setError("El folio ingresado no existe.");
    }
  }

  const estados = [
    "Recibido",
    "En revisión",
    "Canalizado",
    "En atención",
    "Concluido",
  ];

  const estadoActual = reporte
    ? estados.indexOf(reporte.estado)
    : -1;

  return (
    <main className="trackingPage">

      <header className="mainHeader">
        <div className="headerContent">

          <Link href="/" className="logo">
            <img
              src="/logo-rieti.png"
              alt="RIETI"
            />
          </Link>

          <Link href="/" className="adminButton">
            ← Volver
          </Link>

        </div>
      </header>

      <section className="trackingSection">

        <div className="trackingHeader">
          <h1>
            Consulta tu reporte
          </h1>

          <p>
            Ingresa el folio que recibiste al realizar
            tu reporte para consultar su estado.
          </p>

        </div>

        <form
          className="trackingForm"
          onSubmit={consultarReporte}
        >

          <label htmlFor="folio">
            Folio del reporte
          </label>

          <input
            id="folio"
            type="text"
            value={folio}
            onChange={(event) =>
              setFolio(event.target.value)
            }
            placeholder="RIETI-ATZ-2026-000123"
          />

          <button
            type="submit"
            className="trackingButton"
          >
            Consultar reporte
          </button>

        </form>

        {error && (
          <div className="trackingError">
            {error}
          </div>
        )}

        {reporte && (
          <div className="trackingResult">

            <div className="folioBox">

              <span>
                Folio del reporte
              </span>

              <strong>
                {reporte.folio}
              </strong>

            </div>

            <div className="statusBox">

              <span>
                Estado actual
              </span>

              <strong>
                {reporte.estado}
              </strong>

            </div>

            <div className="statusTimeline">

              {estados.map((estado, index) => (
                <div
                  key={estado}
                  className={
                    index <= estadoActual
                      ? "statusStep active"
                      : "statusStep"
                  }
                >

                  <div className="statusCircle">
                    {index < estadoActual ? "✓" : index + 1}
                  </div>

                  <span>
                    {estado}
                  </span>

                </div>
              ))}

            </div>

            <p className="trackingNotice">
              Por motivos de confidencialidad, únicamente
              se muestra el estado general del reporte.
            </p>

          </div>
        )}

      </section>

    </main>
  );
}