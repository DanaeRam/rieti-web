"use client";

import { useState } from "react";

const reportes = [
  {
    folio: "RIETI-ATZ-2026-000123",
    municipio: "Atizapán de Zaragoza",
    fecha: "05/09/2026",
    tipo: "Trabajo infantil",
    estado: "En revisión",
  },
  {
    folio: "RIETI-ATZ-2026-000124",
    municipio: "Atizapán de Zaragoza",
    fecha: "04/09/2026",
    tipo: "Trabajo infantil",
    estado: "En proceso",
  },
  {
    folio: "RIETI-ATZ-2026-000125",
    municipio: "Atizapán de Zaragoza",
    fecha: "03/09/2026",
    tipo: "Posible explotación",
    estado: "Atendido",
  },
  {
    folio: "RIETI-ATZ-2026-000126",
    municipio: "Atizapán de Zaragoza",
    fecha: "02/09/2026",
    tipo: "Trabajo infantil",
    estado: "En revisión",
  },
  {
    folio: "RIETI-ATZ-2026-000127",
    municipio: "Atizapán de Zaragoza",
    fecha: "01/09/2026",
    tipo: "Trabajo infantil",
    estado: "En proceso",
  },
];

export default function Reportes() {
  const [municipio, setMunicipio] = useState("Todos");
  const [estado, setEstado] = useState("Todos");

  const filtrados = reportes.filter((reporte) => {
    const municipioOk =
      municipio === "Todos" || reporte.municipio === municipio;

    const estadoOk =
      estado === "Todos" || reporte.estado === estado;

    return municipioOk && estadoOk;
  });

  return (
    <div className="adminPage">
      <div className="adminTopbar">
        <div>
          <span>RIETI · ADMINISTRACIÓN</span>
          <h1>Bandeja de reportes</h1>
        </div>

        <div className="adminUser">
          <div className="userCircle">A</div>
          <div>
            <strong>Administrador</strong>
            <small>Panel administrativo</small>
          </div>
        </div>
      </div>

      <div className="dashboardCards">
        <article className="dashboardCard cardPurple">
          <span>TOTAL DE REPORTES</span>
          <strong>174</strong>
          <small>Reportes registrados</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>EN REVISIÓN</span>
          <strong>42</strong>
          <small>Requieren atención</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>EN PROCESO</span>
          <strong>28</strong>
          <small>Casos canalizados</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>ATENDIDOS</span>
          <strong>104</strong>
          <small>Casos concluidos</small>
        </article>
      </div>

      <div className="dashboardPanel">
        <div className="panelHeader">
          <div>
            <span>CONSULTA</span>
            <h2>Filtrar reportes</h2>
          </div>
        </div>

        <div className="filters">
          <div>
            <label>Municipio</label>
            <select
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
            >
              <option>Todos</option>
              <option>Atizapán de Zaragoza</option>
            </select>
          </div>

          <div>
            <label>Estado</label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option>Todos</option>
              <option>En revisión</option>
              <option>En proceso</option>
              <option>Atendido</option>
            </select>
          </div>

          <div>
            <label>Periodo</label>
            <select>
              <option>Últimos 6 meses</option>
              <option>Este mes</option>
              <option>Últimos 30 días</option>
              <option>Este año</option>
            </select>
          </div>
        </div>
      </div>

      <div className="dashboardPanel">
        <div className="panelHeader">
          <div>
            <span>REGISTROS</span>
            <h2>Reportes recibidos</h2>
          </div>

          <small>{filtrados.length} resultados</small>
        </div>

        <div className="reportTable">
          <div className="reportRow reportHead">
            <span>Folio</span>
            <span>Municipio</span>
            <span>Fecha</span>
            <span>Tipo</span>
            <span>Estado</span>
            <span></span>
          </div>

          {filtrados.map((reporte) => (
            <div className="reportRow" key={reporte.folio}>
              <strong>{reporte.folio}</strong>
              <span>{reporte.municipio}</span>
              <span>{reporte.fecha}</span>
              <span>{reporte.tipo}</span>

              <span>
                <b
                  className={
                    reporte.estado === "En revisión"
                      ? "statusReview"
                      : reporte.estado === "En proceso"
                        ? "statusProcess"
                        : "statusDone"
                  }
                >
                  {reporte.estado}
                </b>
              </span>

              <button>Consultar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}