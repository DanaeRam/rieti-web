"use client";

import { useState } from "react";

const usuariosIniciales = [
  {
    nombre: "Ana Martínez",
    municipio: "Municipio 1",
    usuario: "admin.municipio1",
    correo: "ana.martinez@municipio.gob.mx",
    rol: "Administrador municipal",
    estado: "Activo",
  },
  {
    nombre: "Carlos Hernández",
    municipio: "Municipio 2",
    usuario: "admin.municipio2",
    correo: "carlos.hernandez@municipio.gob.mx",
    rol: "Administrador municipal",
    estado: "Activo",
  },
  {
    nombre: "Laura Sánchez",
    municipio: "Municipio 3",
    usuario: "admin.municipio3",
    correo: "laura.sanchez@municipio.gob.mx",
    rol: "Administrador municipal",
    estado: "Activo",
  },
];

export default function Accesos() {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [municipio, setMunicipio] = useState("Municipio 1");
  const [correo, setCorreo] = useState("");

  function crearUsuario(event) {
    event.preventDefault();

    setUsuarios([
      ...usuarios,
      {
        nombre,
        municipio,
        usuario: `admin.${municipio.toLowerCase().replaceAll(" ", "")}`,
        correo,
        rol: "Administrador municipal",
        estado: "Activo",
      },
    ]);

    setNombre("");
    setCorreo("");
    setMostrarFormulario(false);
  }

  return (
    <section className="adminPage">

      <div className="adminPageHeader">
        <span>RIETI · ADMINISTRACIÓN</span>
        <h1>Administración de accesos</h1>
      </div>

      <div className="dashboardCards">

        <article className="dashboardCard cardPurple">
          <span>MUNICIPIOS RIETI</span>
          <strong>16</strong>
          <small>Municipios registrados</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>MUNICIPIOS CON CUENTA</span>
          <strong>3</strong>
          <small>Cuentas institucionales</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>MUNICIPIOS SIN CUENTA</span>
          <strong>13</strong>
          <small>Pendientes de registro</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>CUENTAS ACTIVAS</span>
          <strong>{usuarios.length}</strong>
          <small>Administradores</small>
        </article>

      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>USUARIOS MUNICIPALES</span>
            <h2>Administrar accesos</h2>
          </div>

          <button
            className="addButton"
            onClick={() =>
              setMostrarFormulario(!mostrarFormulario)
            }
          >
            {mostrarFormulario
              ? "Cancelar"
              : "Crear nueva cuenta"}
          </button>
        </div>

        {mostrarFormulario && (
          <form
            className="userForm"
            onSubmit={crearUsuario}
          >

            <div>
              <label>Nombre</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre completo"
              />
            </div>

            <div>
              <label>Municipio</label>

              <select
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              >
                {Array.from(
                  { length: 16 },
                  (_, i) => (
                    <option key={i}>
                      Municipio {i + 1}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label>Correo institucional</label>

              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="correo@municipio.gob.mx"
              />
            </div>

            <button className="primaryAction">
              Crear cuenta
            </button>

          </form>
        )}

      </div>

      <div className="dashboardPanel">

        <div className="panelHeader">
          <div>
            <span>REGISTROS</span>
            <h2>Cuentas registradas</h2>
          </div>
        </div>

        <div className="reportTable">

          <div className="userRow userHead">
            <span>Nombre</span>
            <span>Municipio</span>
            <span>Usuario</span>
            <span>Correo</span>
            <span>Rol</span>
            <span>Estado</span>
          </div>

          {usuarios.map((usuario) => (
            <div className="userRow" key={usuario.usuario}>

              <strong>{usuario.nombre}</strong>

              <span>{usuario.municipio}</span>

              <span>{usuario.usuario}</span>

              <span>{usuario.correo}</span>

              <span>{usuario.rol}</span>

              <span>
                <b className="statusDone">
                  {usuario.estado}
                </b>
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}