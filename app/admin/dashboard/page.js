"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const datosMensuales = [
  { mes: "Ene", reportes: 35 },
  { mes: "Feb", reportes: 48 },
  { mes: "Mar", reportes: 42 },
  { mes: "Abr", reportes: 57 },
  { mes: "May", reportes: 63 },
  { mes: "Jun", reportes: 51 },
];

const datosMunicipios = [
  { municipio: "M1", reportes: 38 },
  { municipio: "M2", reportes: 32 },
  { municipio: "M3", reportes: 29 },
  { municipio: "M4", reportes: 27 },
  { municipio: "M5", reportes: 24 },
  { municipio: "M6", reportes: 21 },
  { municipio: "M7", reportes: 19 },
  { municipio: "M8", reportes: 17 },
];

const datosEstado = [
  { nombre: "Canalizados", valor: 62 },
  { nombre: "En seguimiento", valor: 91 },
  { nombre: "Concluidos", valor: 275 },
];

const datosSemana = [
  { dia: "Lun", reportes: 3 },
  { dia: "Mar", reportes: 5 },
  { dia: "Mié", reportes: 2 },
  { dia: "Jue", reportes: 6 },
  { dia: "Vie", reportes: 4 },
  { dia: "Sáb", reportes: 2 },
  { dia: "Dom", reportes: 1 },
];

const datosTipo = [
  { tipo: "Venta de productos", reportes: 180 },
  { tipo: "Mendicidad forzada", reportes: 96 },
  { tipo: "Trabajo peligroso", reportes: 48 },
  { tipo: "Otro", reportes: 32 },
];

const coloresEstado = [
  "#C95F91",
  "#496A9F",
  "#55AFC1",
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

      <div className="dashboardPanel dashboardChartLarge">

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
            <LineChart data={datosMensuales}>
              <CartesianGrid stroke="#ebe9f0" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="reportes"
                stroke="#3E3869"
                strokeWidth={3}
                dot={{
                  r: 5,
                  fill: "#ffffff",
                  stroke: "#3E3869",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div className="dashboardGrid">

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>DISTRIBUCIÓN</span>
              <h2>Reportes por municipio</h2>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={datosMunicipios}>
                <CartesianGrid stroke="#ebe9f0" />
                <XAxis dataKey="municipio" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="reportes"
                  fill="#496A9F"
                  radius={[7, 7, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>ESTADOS</span>
              <h2>Estado de los reportes</h2>
            </div>
          </div>

          <div className="pieChartContainer">

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={datosEstado}
                  dataKey="valor"
                  nameKey="nombre"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={105}
                  paddingAngle={3}
                >
                  {datosEstado.map((entry, index) => (
                    <Cell
                      key={entry.nombre}
                      fill={coloresEstado[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                />
              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <div className="dashboardGrid">

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>ACTIVIDAD RECIENTE</span>
              <h2>Reportes recibidos esta semana</h2>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={datosSemana}>
                <CartesianGrid stroke="#ebe9f0" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="reportes"
                  stroke="#55AFC1"
                  fill="#55AFC1"
                  fillOpacity={0.2}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>CLASIFICACIÓN</span>
              <h2>Tipos de reporte</h2>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={datosTipo}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid stroke="#ebe9f0" />

                <XAxis type="number" />

                <YAxis
                  type="category"
                  dataKey="tipo"
                  width={105}
                  tick={{
                    fontSize: 10,
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="reportes"
                  fill="#D16C9A"
                  radius={[0, 7, 7, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

    </section>
  );
}