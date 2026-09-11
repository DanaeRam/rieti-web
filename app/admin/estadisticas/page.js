"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import HeatMap from "@/components/HeatMap";

const municipios = [
  { municipio: "Municipio 1", reportes: 108 },
  { municipio: "Municipio 2", reportes: 92 },
  { municipio: "Municipio 3", reportes: 74 },
  { municipio: "Municipio 4", reportes: 61 },
  { municipio: "Municipio 5", reportes: 53 },
  { municipio: "Municipio 6", reportes: 48 },
  { municipio: "Municipio 7", reportes: 41 },
  { municipio: "Municipio 8", reportes: 37 },
];

const reportesMensuales = [
  { mes: "Ene", reportes: 35 },
  { mes: "Feb", reportes: 48 },
  { mes: "Mar", reportes: 42 },
  { mes: "Abr", reportes: 57 },
  { mes: "May", reportes: 74 },
  { mes: "Jun", reportes: 72 },
];

const estados = [
  { nombre: "Pendientes", valor: 62 },
  { nombre: "En seguimiento", valor: 91 },
  { nombre: "Concluidos", valor: 275 },
];

const prioridades = [
  { prioridad: "Alta", reportes: 62 },
  { prioridad: "Media", reportes: 151 },
  { prioridad: "Baja", reportes: 215 },
];

const coloresEstado = [
  "#D16C9A",
  "#496A9F",
  "#55AFC1",
];

export default function Estadisticas() {
  return (
    <section className="adminPage">

      <div className="adminPageHeader">
        <span>RIETI · ADMINISTRACIÓN</span>
        <h1>Estadísticas y analítica</h1>
      </div>

      <div className="dashboardCards">

        <article className="dashboardCard cardPurple">
          <span>TOTAL DE REPORTES</span>
          <strong>428</strong>
          <small>Reportes registrados</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>MUNICIPIOS CON REPORTES</span>
          <strong>12</strong>
          <small>De 16 municipios</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>PROMEDIO MENSUAL</span>
          <strong>53</strong>
          <small>Reportes por mes</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>PRIORIDAD ALTA</span>
          <strong>62</strong>
          <small>Requieren atención</small>
        </article>

      </div>

      <div className="analyticsSummary">

        <div>
          <span>COBERTURA MUNICIPAL</span>
          <strong>75%</strong>
          <small>12 de 16 municipios</small>
        </div>

        <div>
          <span>CASOS CONCLUIDOS</span>
          <strong>64.3%</strong>
          <small>275 de 428 reportes</small>
        </div>

        <div>
          <span>PRIORIDAD ALTA</span>
          <strong>14.5%</strong>
          <small>62 reportes</small>
        </div>

        <div>
          <span>PROMEDIO DIARIO</span>
          <strong>2.4</strong>
          <small>Reportes registrados</small>
        </div>

      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>UBICACIÓN</span>
            <h2>Mapa de calor de reportes</h2>
          </div>

          <select>
            <option>Todos los municipios</option>
            <option>Municipio 1</option>
            <option>Municipio 2</option>
            <option>Municipio 3</option>
          </select>
        </div>

        <p className="analyticsDescription">
          El mapa muestra las zonas con mayor concentración de reportes
          registrados. Las áreas de mayor intensidad representan una
          concentración más alta de casos.
        </p>

        <div className="analyticsHeatMap">
          <HeatMap />
        </div>

      </div>

      <div className="analyticsGrid">

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>COBERTURA</span>
              <h2>Reportes por municipio</h2>
            </div>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={municipios}>

                <CartesianGrid stroke="#ebe9f0" />

                <XAxis
                  dataKey="municipio"
                  tick={{ fontSize: 10 }}
                  angle={-25}
                  textAnchor="end"
                  height={60}
                />

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
              <h2>Distribución de reportes</h2>
            </div>
          </div>

          <div className="chart">

            <ResponsiveContainer width="100%" height={320}>
              <PieChart>

                <Pie
                  data={estados}
                  dataKey="valor"
                  nameKey="nombre"
                  cx="50%"
                  cy="45%"
                  innerRadius={65}
                  outerRadius={105}
                  paddingAngle={3}
                >

                  {estados.map((estado, index) => (
                    <Cell
                      key={estado.nombre}
                      fill={coloresEstado[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={45}
                />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <div className="analyticsGrid">

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>EVOLUCIÓN</span>
              <h2>Reportes recibidos por mes</h2>
            </div>
          </div>

          <div className="chart">

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reportesMensuales}>

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

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>PRIORIDAD</span>
              <h2>Reportes por prioridad</h2>
            </div>
          </div>

          <div className="chart">

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={prioridades}>

                <CartesianGrid stroke="#ebe9f0" />

                <XAxis dataKey="prioridad" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="reportes"
                  fill="#D16C9A"
                  radius={[7, 7, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
}