const municipios = [
  ["Municipio 1", 108],
  ["Municipio 2", 92],
  ["Municipio 3", 74],
  ["Municipio 4", 61],
  ["Municipio 5", 53],
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
          </select>
        </div>

        <div className="heatMap">
          <div className="heatPoint point1" />
          <div className="heatPoint point2" />
          <div className="heatPoint point3" />
          <div className="heatPoint point4" />
          <div className="heatPoint point5" />
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

          <div className="analyticsList">

            {municipios.map(([municipio, cantidad]) => (
              <div key={municipio}>
                <span>{municipio}</span>
                <strong>{cantidad}</strong>
              </div>
            ))}

          </div>

        </div>

        <div className="dashboardPanel">

          <div className="panelHeader">
            <div>
              <span>ESTADO</span>
              <h2>Reportes por estado</h2>
            </div>
          </div>

          <div className="analyticsList">
            <div>
              <span>Pendientes</span>
              <strong>62</strong>
            </div>

            <div>
              <span>En proceso</span>
              <strong>91</strong>
            </div>

            <div>
              <span>Resueltos</span>
              <strong>275</strong>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}