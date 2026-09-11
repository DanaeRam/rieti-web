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

    detalle: {
      geolocalizacion: "19.6018, -99.0507",

      tipoActividad: "Trabajo peligroso",

      menores: "2",

      edad: "6 a 11 años",

      genero: "Mixto",

      horario: "14:30",

      descripcion:
        "Se observaron dos menores realizando actividades de venta en vía pública durante horario escolar.",

      observaciones:
        "El lugar se encuentra cerca de una zona comercial.",

      calle: "Av. Principal",

      colonia: "Centro",

      referencias:
        "Frente a un parque y cerca de una escuela.",

      evidencia:
        "1 fotografía referencial",

      riesgo:
        "Sí",

      responsable:
        "Sin asignar",

      dependencia:
        "Pendiente de canalización",

      acciones:
        "Reporte recibido. En espera de revisión inicial.",

      seguimiento:
        "2026-09-06",

      resultado:
        "Pendiente",

      cierre:
        "No cerrado"
    }
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
  const [reporteSeleccionado, setReporteSeleccionado] = useState(null);

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

              <button
                className="viewReport"
                onClick={() => setReporteSeleccionado(reporte)}
              >
                Consultar
              </button>

            </div>
          ))}

        </div>

        {reporteSeleccionado && (
  <div className="modalOverlay">

    <div className="expedienteModal">


      <div className="modalHeader">

        <div>

          <span>
            EXPEDIENTE DIGITAL
          </span>

          <h2>
            {reporteSeleccionado.folio}
          </h2>

        </div>


        <button
          className="modalClose"
          onClick={() => setReporteSeleccionado(null)}
        >
          ×
        </button>

      </div>



      <div className="expedienteGrid">


        <div>
          <small>
            Fecha
          </small>

          <p>
            {reporteSeleccionado.fecha}
          </p>
        </div>



        <div>
          <small>
            Municipio
          </small>

          <p>
            {reporteSeleccionado.municipio}
          </p>
        </div>



        <div>
          <small>
            Estado
          </small>

          <p>
            {reporteSeleccionado.estado}
          </p>
        </div>



        <div>
          <small>
            Geolocalización
          </small>

          <p>
            {reporteSeleccionado.detalle.geolocalizacion}
          </p>
        </div>



        <div>
          <small>
            Tipo de actividad
          </small>

          <p>
            {reporteSeleccionado.detalle.tipoActividad}
          </p>
        </div>



        <div>
          <small>
            NNA aproximados
          </small>

          <p>
            {reporteSeleccionado.detalle.menores}
          </p>
        </div>



        <div>
          <small>
            Edad
          </small>

          <p>
            {reporteSeleccionado.detalle.edad}
          </p>
        </div>



        <div>
          <small>
            Género
          </small>

          <p>
            {reporteSeleccionado.detalle.genero}
          </p>
        </div>



        <div>
          <small>
            Horario observado
          </small>

          <p>
            {reporteSeleccionado.detalle.horario}
          </p>
        </div>



        <div className="expedienteFull">

          <small>
            Descripción
          </small>

          <p>
            {reporteSeleccionado.detalle.descripcion}
          </p>

        </div>



        <div className="expedienteFull">

          <small>
            Observaciones adicionales
          </small>

          <p>
            {reporteSeleccionado.detalle.observaciones}
          </p>

        </div>



        <div>
          <small>
            Riesgo
          </small>

          <p>
            {reporteSeleccionado.detalle.riesgo}
          </p>
        </div>



        <div>
          <small>
            Evidencias
          </small>

          <p>
            {reporteSeleccionado.detalle.evidencia}
          </p>
        </div>



        <div>
          <small>
            Responsable
          </small>

          <p>
            {reporteSeleccionado.detalle.responsable}
          </p>
        </div>



        <div>
          <small>
            Dependencia canalizada
          </small>

          <p>
            {reporteSeleccionado.detalle.dependencia}
          </p>
        </div>



        <div className="expedienteFull">

          <small>
            Acciones realizadas
          </small>

          <p>
            {reporteSeleccionado.detalle.acciones}
          </p>

        </div>



        <div>
          <small>
            Seguimiento
          </small>

          <p>
            {reporteSeleccionado.detalle.seguimiento}
          </p>
        </div>



        <div>
          <small>
            Resultado
          </small>

          <p>
            {reporteSeleccionado.detalle.resultado}
          </p>
        </div>



        <div>
          <small>
            Cierre
          </small>

          <p>
            {reporteSeleccionado.detalle.cierre}
          </p>
        </div>


      </div>


    </div>

  </div>
)}

      </div>

    </section>
  );
}