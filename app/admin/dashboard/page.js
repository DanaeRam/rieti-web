"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const datos = [
  { mes: "Ene", reportes: 18 },
  { mes: "Feb", reportes: 24 },
  { mes: "Mar", reportes: 31 },
  { mes: "Abr", reportes: 28 },
  { mes: "May", reportes: 42 },
  { mes: "Jun", reportes: 37 },
];

export default function Dashboard() {
  return (
    <div className="adminPage">
      <div className="adminTopbar">
        <div>
          <span>RIETI · ADMINISTRACIÓN</span>
          <h1>Dashboard</h1>
        </div>

      </div>

      <div className="dashboardCards">
        <article className="dashboardCard cardPurple">
          <span>REPORTES RECIBIDOS</span>
          <strong>174</strong>
          <small>+12% este mes</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>EN REVISIÓN</span>
          <strong>42</strong>
          <small>Reportes pendientes</small>
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
            <span>ACTIVIDAD</span>
            <h2>Reportes recibidos</h2>
          </div>

          <select>
            <option>Últimos 6 meses</option>
            <option>Este año</option>
          </select>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={datos}>
              <CartesianGrid stroke="#eeeaf2" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="reportes"
                stroke="#3E3869"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboardPanel">
        <div className="panelHeader">
          <div>
            <span>COBERTURA</span>
            <h2>Reportes por municipio</h2>
          </div>
        </div>

        <div className="municipalityList">
          <div>
            <span>Atizapán de Zaragoza</span>
            <strong>42</strong>
          </div>

          <div>
            <span>Naucalpan</span>
            <strong>31</strong>
          </div>

          <div>
            <span>Tlalnepantla</span>
            <strong>25</strong>
          </div>

          <div>
            <span>Cuautitlán Izcalli</span>
            <strong>19</strong>
          </div>
        </div>
      </div>
    </div>
  );
}