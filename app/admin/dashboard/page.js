"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

const reportes = [
  { month: "Ene", reports: 18 },
  { month: "Feb", reports: 25 },
  { month: "Mar", reports: 31 },
  { month: "Abr", reports: 28 },
  { month: "May", reports: 42 },
  { month: "Jun", reports: 37 }
];

const municipios = [
  { name: "Atizapán", reports: 42 },
  { name: "Tlalnepantla", reports: 31 },
  { name: "Naucalpan", reports: 25 },
  { name: "Cuautitlán", reports: 19 },
  { name: "Otros", reports: 15 }
];

const estado = [
  { name: "En revisión", value: 42 },
  { name: "En proceso", value: 31 },
  { name: "Atendidos", value: 27 }
];

const colors = [
  "#D16C9A",
  "#496A9F",
  "#55AFC1"
];

export default function AdminDashboard() {
  return (
    <div className="dashboard">

      <header className="adminTopbar">
        <div>
          <span>RIETI · ADMINISTRACIÓN</span>
          <h1>Dashboard</h1>
        </div>
      </header>

      <section className="dashboardCards">

        <div className="dashboardCard cardPurple">
          <span>REPORTES RECIBIDOS</span>
          <strong>174</strong>
          <small>+12% este mes</small>
        </div>

        <div className="dashboardCard cardPink">
          <span>EN REVISIÓN</span>
          <strong>42</strong>
          <small>Reportes pendientes</small>
        </div>

        <div className="dashboardCard cardBlue">
          <span>EN PROCESO</span>
          <strong>31</strong>
          <small>Casos activos</small>
        </div>

        <div className="dashboardCard cardTurquoise">
          <span>ATENDIDOS</span>
          <strong>101</strong>
          <small>Casos gestionados</small>
        </div>

      </section>

      <section className="dashboardGrid">

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>ACTIVIDAD</span>
              <h2>Reportes recibidos</h2>
            </div>

            <select>
                <option>Último mes</option>
                <option>Últimos 6 meses</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={reportes}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="reports"
                stroke="#3E3869"
                fill="#A98CB0"
                fillOpacity={0.35}
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>DISTRIBUCIÓN</span>
              <h2>Estado de reportes</h2>
            </div>
          </div>

          <div className="pieContainer">

            <ResponsiveContainer width="100%" height={220}>
              <PieChart>

                <Pie
                  data={estado}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={82}
                >
                  {estado.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={colors[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

            <div className="statusList">

              {estado.map((item, index) => (
                <div key={item.name}>

                  <i
                    style={{
                      background: colors[index]
                    }}
                  />

                  <span>{item.name}</span>

                  <strong>{item.value}%</strong>

                </div>
              ))}

            </div>
          </div>
        </div>

        <div className="dashboardPanel">
          <div className="panelHeader">

            <div>
              <span>COBERTURA</span>
              <h2>Reportes por municipio</h2>
            </div>

          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={municipios}>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="reports"
                fill="#496A9F"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="dashboardPanel">

          <div className="panelHeader">

            <div>
              <span>SEGUIMIENTO</span>
              <h2>Reportes recientes</h2>
            </div>

            <a href="/admin/reportes">
              Ver todos
            </a>

          </div>

          <div className="reportTable">

            <div className="tableRow tableHead">
              <span>Folio</span>
              <span>Municipio</span>
              <span>Fecha</span>
              <span>Estado</span>
            </div>

            <div className="tableRow">
              <span>RIETI-ATZ-00123</span>
              <span>Atizapán</span>
              <span>06/09/2026</span>
              <b className="statusReview">
                En revisión
              </b>
            </div>

            <div className="tableRow">
              <span>RIETI-TLN-00122</span>
              <span>Tlalnepantla</span>
              <span>05/09/2026</span>
              <b className="statusProcess">
                En proceso
              </b>
            </div>

            <div className="tableRow">
              <span>RIETI-NCL-00121</span>
              <span>Naucalpan</span>
              <span>04/09/2026</span>
              <b className="statusDone">
                Atendido
              </b>
            </div>

            <div className="tableRow">
              <span>RIETI-ATZ-00120</span>
              <span>Atizapán</span>
              <span>03/09/2026</span>
              <b className="statusReview">
                En revisión
              </b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}