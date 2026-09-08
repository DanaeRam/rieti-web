"use client";

import { useState } from "react";

const usuariosIniciales = [
  {
    nombre: "Administrador",
    correo: "admin@rieti.mx",
    municipio: "Todos",
    estado: "Activo",
  },
  {
    nombre: "Usuario municipal",
    correo: "usuario@rieti.mx",
    municipio: "Atizapán de Zaragoza",
    estado: "Activo",
  },
  {
    nombre: "Coordinador",
    correo: "coordinador@rieti.mx",
    municipio: "Naucalpan",
    estado: "Activo",
  },
  {
    nombre: "Usuario municipal",
    correo: "usuario2@rieti.mx",
    municipio: "Tlalnepantla",
    estado: "Inactivo",
  },
];

export default function Usuarios() {
  const [usuarios] = useState(usuariosIniciales);

  return (
    <div className="adminPage">
      <div className="adminTopbar">
        <div>
          <span>RIETI · ADMINISTRACIÓN</span>
          <h1>Administración de accesos</h1>
        </div>
      </div>

      <div className="dashboardCards">
        <article className="dashboardCard cardPurple">
          <span>USUARIOS TOTALES</span>
          <strong>16</strong>
          <small>Cuentas registradas</small>
        </article>

        <article className="dashboardCard cardTurquoise">
          <span>ACTIVOS</span>
          <strong>14</strong>
          <small>Cuentas activas</small>
        </article>

        <article className="dashboardCard cardPink">
          <span>INACTIVOS</span>
          <strong>2</strong>
          <small>Cuentas desactivadas</small>
        </article>

        <article className="dashboardCard cardBlue">
          <span>MUNICIPIOS</span>
          <strong>16</strong>
          <small>Con acceso</small>
        </article>
      </div>

      <div className="dashboardPanel">
        <div className="panelHeader">
          <div>
            <span>ADMINISTRACIÓN</span>
            <h2>Gestión de usuarios</h2>
          </div>

          <button className="addButton">
            + Nuevo usuario
          </button>
        </div>

        <div className="reportTable">
          <div className="userRow userHead">
            <span>Nombre</span>
            <span>Correo</span>
            <span>Municipio</span>
            <span>Estado</span>
            <span></span>
          </div>

          {usuarios.map((usuario, index) => (
            <div className="userRow" key={index}>
              <strong>{usuario.nombre}</strong>
              <span>{usuario.correo}</span>
              <span>{usuario.municipio}</span>

              <span>
                <b
                  className={
                    usuario.estado === "Activo"
                      ? "statusDone"
                      : "statusReview"
                  }
                >
                  {usuario.estado}
                </b>
              </span>

              <button>Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}