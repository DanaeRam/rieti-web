"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const datos = [
  { municipio: "Atizapán", reportes: 42 },
  { municipio: "Naucalpan", reportes: 31 },
  { municipio: "Tlalnepantla", reportes: 25 },
  { municipio: "Cuautitlán", reportes: 19 },
];

export default function Estadisticas() {
  return (
    <div className="adminPage">
      <div className="adminTopbar">
        <div>
          <span>RIETI · ADMINISTRACIÓN</span>
          <h1>Estadísticas y analítica</h1>
        </div>
      </div>

      <div className="dashboardCards">
        <article className="dashboardCard cardPurple">
          <span>REPORTES TOTALES</span>
          <strong>174</strong>
          <small>Registrados</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>TRABAJO INFANTIL</span>
          <strong>126</strong>
          <small>72% del total</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>CASOS ATENDIDOS</span>
          <strong>104</strong>
          <small>60% del total</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>MUNICIPIOS</span>
          <strong>16</strong>
          <small>Con cobertura</small>
        </article>
      </div>

      <div className="dashboardPanel">
        <div className="panelHeader">
          <div>
            <span>DISTRIBUCIÓN</span>
            <h2>Reportes por municipio</h2>
          </div>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={datos}>
              <CartesianGrid stroke="#eeeaf2" />
              <XAxis dataKey="municipio" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="reportes"
                fill="#496A9F"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="analyticsGrid">
        <div className="dashboardPanel">
          <div className="panelHeader">
            <div>
              <span>ESTADOS</span>
              <h2>Situación de reportes</h2>
            </div>
          </div>

          <div className="analyticsList">
            <div>
              <span>En revisión</span>
              <strong>42</strong>
            </div>

            <div>
              <span>En seguimiento</span>
              <strong>28</strong>
            </div>

            <div>
              <span>Concluidos</span>
              <strong>104</strong>
            </div>
          </div>
        </div>

        <div className="dashboardPanel">
          <div className="panelHeader">
            <div>
              <span>TIPOS</span>
              <h2>Principales reportes</h2>
            </div>
          </div>

          <div className="analyticsList">
            <div>
              <span>Trabajo infantil</span>
              <strong>126</strong>
            </div>

            <div>
              <span>Posible explotación</span>
              <strong>31</strong>
            </div>

            <div>
              <span>Otros</span>
              <strong>17</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}