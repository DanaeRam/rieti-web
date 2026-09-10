"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const datos = [
  { mes: "Ene", reportes: 35 },
  { mes: "Feb", reportes: 48 },
  { mes: "Mar", reportes: 42 },
  { mes: "Abr", reportes: 57 },
  { mes: "May", reportes: 63 },
  { mes: "Jun", reportes: 51 },
];

export default function Dashboard() {
  return (
    <section className="adminPage">

      <div className="adminPageHeader">
        <span>RIETI · ADMINISTRACIÓN</span>
        <h1>Dashboard</h1>
      </div>

      <div className="dashboardCards">

        <article className="dashboardCard cardPurple">
          <span>TOTAL DE REPORTES</span>
          <strong>428</strong>
          <small>Reportes registrados</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>REPORTES PENDIENTES</span>
          <strong>62</strong>
          <small>Requieren atención</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>EN SEGUIMIENTO</span>
          <strong>91</strong>
          <small>Casos canalizados</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>CONCLUIDOS</span>
          <strong>275</strong>
          <small>Casos atendidos</small>
        </article>

      </div>

      <div className="dashboardMiniCards">

        <div className="miniCard">
          <span>ESTE MES</span>
          <strong>74</strong>
          <small>Reportes recibidos</small>
        </div>

        <div className="miniCard">
          <span>ESTA SEMANA</span>
          <strong>18</strong>
          <small>Reportes recibidos</small>
        </div>

        <div className="miniCard">
          <span>HOY</span>
          <strong>4</strong>
          <small>Reportes recibidos</small>
        </div>

      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>ACTIVIDAD</span>
            <h2>Reportes recibidos por mes</h2>
          </div>

          <select>
            <option>Últimos 6 meses</option>
            <option>Este año</option>
          </select>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={datos}>
              <CartesianGrid stroke="#ebe9f0" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="reportes"
                stroke="#3E3869"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

    </section>
  );
}