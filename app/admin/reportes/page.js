"use client";

import { useState } from "react";

const municipios = Array.from(
  { length: 16 },
  (_, i) => `Municipio ${i + 1}`
);

const reportes = [
  {
    folio: "RIETI-M1-2026-000123",
    municipio: "Municipio 1",
    estado: "Pendiente",
    prioridad: "Alta",
    fecha: "2026-09-05",
  },
  {
    folio: "RIETI-M2-2026-000124",
    municipio: "Municipio 2",
    estado: "En proceso",
    prioridad: "Media",
    fecha: "2026-09-04",
  },
  {
    folio: "RIETI-M3-2026-000125",
    municipio: "Municipio 3",
    estado: "Resuelto",
    prioridad: "Baja",
    fecha: "2026-09-03",
  },
  {
    folio: "RIETI-M4-2026-000126",
    municipio: "Municipio 4",
    estado: "Pendiente",
    prioridad: "Alta",
    fecha: "2026-09-02",
  },
  {
    folio: "RIETI-M5-2026-000127",
    municipio: "Municipio 5",
    estado: "En proceso",
    prioridad: "Media",
    fecha: "2026-09-01",
  },
];

export default function Reportes() {
  const [municipio, setMunicipio] = useState("Todos");
  const [estado, setEstado] = useState("Todos");
  const [prioridad, setPrioridad] = useState("Todos");
  const [fecha, setFecha] = useState("");

  const filtrados = reportes.filter((reporte) => {
    return (
      (municipio === "Todos" || reporte.municipio === municipio) &&
      (estado === "Todos" || reporte.estado === estado) &&
      (prioridad === "Todos" || reporte.prioridad === prioridad) &&
      (!fecha || reporte.fecha === fecha)
    );
  });

  return (
    <section className="adminPage">

      <div className="adminPageHeader">
        <span>RIETI · ADMINISTRACIÓN</span>
        <h1>Bandeja de reportes</h1>
      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>CONSULTA</span>
            <h2>Filtros de búsqueda</h2>
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

              {municipios.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Estado</label>

            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option>Todos</option>
              <option>Registrado</option>
              <option>En revisión</option>
              <option>En seguimiento</option>
              <option>Canalizado</option>
              <option>Concluido</option>
              <option>Archivado</option>
              <option>Cancelado</option>
              <option>Reincidente</option>
            </select>
          </div>

          <div>
            <label>Prioridad</label>

            <select
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option>Todos</option>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>

          <div>
            <label>Fecha</label>

            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

        </div>

      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>REGISTROS</span>
            <h2>Reportes</h2>
          </div>

          <small className="reportCount">
            {filtrados.length} resultados
          </small>
        </div>

        <div className="reportTable">

          <div className="reportRow reportHead">
            <span>Folio</span>
            <span>Municipio</span>
            <span>Estado</span>
            <span>Prioridad</span>
            <span>Fecha</span>
            <span>Acciones</span>
          </div>

          {filtrados.map((reporte) => (
            <div className="reportRow" key={reporte.folio}>

              <strong>{reporte.folio}</strong>

              <span>{reporte.municipio}</span>

              <span>
                <b
                  className={
                    reporte.estado === "Pendiente"
                      ? "statusReview"
                      : reporte.estado === "En proceso"
                        ? "statusProcess"
                        : "statusDone"
                  }
                >
                  {reporte.estado}
                </b>
              </span>

              <span>{reporte.prioridad}</span>

              <span>{reporte.fecha}</span>

              <button>
                Consultar
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}