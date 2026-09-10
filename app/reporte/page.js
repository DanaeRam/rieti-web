"use client";

import { useState } from "react";
import Link from "next/link";

export default function Reporte() {
  const [paso, setPaso] = useState(1);
  const [enviado, setEnviado] = useState(false);

  const [tipoReporte, setTipoReporte] = useState("");
  const [correo, setCorreo] = useState("");

  const [numeroMenores, setNumeroMenores] = useState("");
  const [edades, setEdades] = useState("");
  const [genero, setGenero] = useState("");
  const [actividad, setActividad] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [municipio, setMunicipio] = useState("");
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [referencias, setReferencias] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [ubicacionManual, setUbicacionManual] = useState(false);

  const [riesgo, setRiesgo] = useState("");
  const [archivos, setArchivos] = useState([]);

  const paso1Completo =
    tipoReporte &&
    (tipoReporte === "anonimo" || correo);

  const paso2Completo =
    numeroMenores &&
    edades &&
    genero &&
    actividad &&
    dia &&
    hora &&
    descripcion;

  const paso3Completo =
    municipio &&
    calle &&
    colonia &&
    referencias &&
    ubicacion;

  const paso4Completo = riesgo;

  function obtenerUbicacion() {
    if (!navigator.geolocation) {
      setUbicacionManual(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion(
          `${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
        );
      },
      () => {
        setUbicacionManual(true);
      }
    );
  }

  function seleccionarUbicacionManual() {
    setUbicacion("Ubicación seleccionada manualmente");
    setUbicacionManual(true);
  }

  function manejarArchivos(event) {
    const seleccionados = Array.from(event.target.files);

    const validos = seleccionados.filter(
      (archivo) => archivo.size <= 15 * 1024 * 1024
    );

    setArchivos(validos.slice(0, 2));
  }

  function eliminarArchivo(index) {
    setArchivos(
      archivos.filter((_, archivoIndex) => archivoIndex !== index)
    );
  }

  function enviarReporte(event) {
    event.preventDefault();

    if (!paso4Completo) return;

    setEnviado(true);
  }

  if (enviado) {
    return (
      <main className="reportPage">
        <header className="formHeader">
          <Link href="/" className="logo">
            <img src="/logo-rieti.png" alt="RIETI" />
          </Link>
        </header>

        <section className="successSection">
          <div className="successCard">
            <div className="successIcon">✓</div>

            <span className="successTag">
              REPORTE RECIBIDO
            </span>

            <h1>
              ¡Gracias por ayudar a proteger los derechos de niñas, niños y adolescentes!
            </h1>

            <p>
              Tu reporte fue recibido correctamente.
            </p>

            {tipoReporte === "seguimiento" ? (
              <>
                <div className="folioBox">
                  <span>FOLIO DE REPORTE</span>
                  <strong>RIETI-ATZ-2026-000123</strong>
                </div>

                <p className="successText">
                  Guarda este folio para consultar posteriormente el estado
                  de tu reporte.
                </p>

                <Link
                  href="/seguimiento"
                  className="formButton primary"
                >
                  Consultar seguimiento
                </Link>
              </>
            ) : (
              <p className="successText">
                Al tratarse de un reporte anónimo, no se generará un folio
                para seguimiento.
              </p>
            )}

            <div>
              <Link
                href="/"
                className="formButton secondary"
              >
                Regresar al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="reportPage">

      <header className="formHeader">
        <Link href="/" className="logo">
          <img src="/logo-rieti.png" alt="RIETI" />
        </Link>

        <Link href="/" className="backButton">
          ← Regresar
        </Link>
      </header>

      <section className="reportContainer">



        <div className="progress">
          {[1, 2, 3, 4].map((numero) => (
            <div
              key={numero}
              className={`progressStep ${
                paso >= numero ? "active" : ""
              }`}
            >
              <span>{numero}</span>

              <small>
                {numero === 1 && "Tu reporte"}
                {numero === 2 && "Situación"}
                {numero === 3 && "Ubicación"}
                {numero === 4 && "Confirmación"}
              </small>
            </div>
          ))}
        </div>

        <form className="reportForm" onSubmit={enviarReporte}>

          {paso === 1 && (
            <div className="formModule">

              <div className="moduleTitle">
                <span>01</span>

                <div>
                  <h2>¿Cómo deseas realizar tu reporte?</h2>
                  <p>
                    Selecciona la opción que prefieras.
                  </p>
                </div>
              </div>

              <div className="optionGrid">

                <button
                  type="button"
                  className={`optionCard ${
                    tipoReporte === "anonimo" ? "selected" : ""
                  }`}
                  onClick={() => {
                    setTipoReporte("anonimo");
                    setCorreo("");
                  }}
                >
                  <div className="optionIcon">◯</div>

                  <strong>Reporte anónimo</strong>

                  <span>
                    No se solicitará información de contacto ni se generará
                    un folio de seguimiento.
                  </span>
                </button>

                <button
                  type="button"
                  className={`optionCard ${
                    tipoReporte === "seguimiento" ? "selected" : ""
                  }`}
                  onClick={() => setTipoReporte("seguimiento")}
                >
                  <div className="optionIcon">✓</div>

                  <strong>Reporte con seguimiento</strong>

                  <span>
                    Proporciona un correo para recibir tu folio y consultar
                    los avances del reporte.
                  </span>
                </button>

              </div>

              {tipoReporte === "seguimiento" && (
                <div className="formField">
                  <label htmlFor="correo">
                    Correo electrónico <em>*</em>
                  </label>

                  <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
              )}

              <div className="moduleInfo">
                <strong>Tu información está protegida</strong>

                <p>
                  Los datos proporcionados serán utilizados únicamente para
                  la atención y seguimiento del reporte.
                </p>
              </div>

              <div className="formActions">
                <button
                  type="button"
                  className="formButton primary"
                  onClick={() => setPaso(2)}
                  disabled={!paso1Completo}
                >
                  Continuar →
                </button>
              </div>

            </div>
          )}

          {paso === 2 && (
            <div className="formModule">

              <div className="moduleTitle">
                <span>02</span>

                <div>
                  <h2>Cuéntanos qué ocurrió</h2>

                  <p>
                    Describe únicamente lo que observaste.
                  </p>
                </div>
              </div>

              <div className="formGrid">

                <div className="formField">
                  <label>
                    Número de menores <em>*</em>
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={numeroMenores}
                    onChange={(e) => setNumeroMenores(e.target.value)}
                    placeholder="Ej. 2"
                    required
                  />
                </div>

                <div className="formField">
                  <label>
                    Rango de edad <em>*</em>
                  </label>

                  <select
                    value={edades}
                    onChange={(e) => setEdades(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option>0 a 5 años</option>
                    <option>6 a 11 años</option>
                    <option>12 a 14 años</option>
                    <option>15 a 17 años</option>
                    <option>No sé</option>
                  </select>
                </div>

                <div className="formField">
                  <label>
                    Género observado <em>*</em>
                  </label>

                  <select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Mixto</option>
                    <option>No sé</option>
                  </select>
                </div>

                <div className="formField">
                  <label>
                    Tipo de actividad <em>*</em>
                  </label>

                  <select
                    value={actividad}
                    onChange={(e) => setActividad(e.target.value)}
                    required
                  >
                    <option>Venta de productos</option>
                    <option>Mendicidad forzada</option>
                    <option>Explotación sexual</option>
                    <option>Trata de personas</option>
                    <option>Utilización para actividades ilícitas</option>
                    <option>Trabajo peligroso</option>
                    <option>Otra situación de explotación y/o vulneración</option>
                  </select>
                </div>

                <div className="formField">
                  <label>
                    Día en que se observó <em>*</em>
                  </label>

                  <input
                    type="date"
                    value={dia}
                    onChange={(e) => setDia(e.target.value)}
                    required
                  />
                </div>

                <div className="formField timeFields">
                  <label>
                    Horario observado <em>*</em>
                  </label>

                  <div>
                    <input
                      type="time"
                      value={hora}
                      onChange={(e) => setHora(e.target.value)}
                      required
                    />    
                  </div>
                </div>

                <div className="formField full">
                  <label>
                    ¿Qué observaste? <em>*</em>
                  </label>

                  <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Describe brevemente la situación..."
                    rows="5"
                    required
                  />
                </div>

                <div className="formField full">
                  <label>
                    Observaciones adicionales
                  </label>

                  <textarea
                    value={observaciones}
                    onChange={(e) => setObservaciones(e.target.value)}
                    placeholder="Información adicional que consideres importante..."
                    rows="4"
                  />
                </div>

              </div>

              <div className="formHint">
                <span>i</span>

                <p>
                  No necesitas conocer todos los detalles. Proporciona
                  únicamente la información que hayas observado.
                </p>
              </div>

              <div className="formActions">

                <button
                  type="button"
                  className="formButton secondary"
                  onClick={() => setPaso(1)}
                >
                  ← Regresar
                </button>

                <button
                  type="button"
                  className="formButton primary"
                  onClick={() => setPaso(3)}
                  disabled={!paso2Completo}
                >
                  Continuar →
                </button>

              </div>

            </div>
          )}

          {paso === 3 && (
            <div className="formModule">

              <div className="moduleTitle">
                <span>03</span>

                <div>
                  <h2>Indica dónde ocurrió</h2>

                  <p>
                    La ubicación ayudará a canalizar el reporte correctamente.
                  </p>
                </div>
              </div>

              <div className="formGrid">

                <div className="formField full">
                  <label>
                    Municipio <em>*</em>
                  </label>

                  <select
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    required
                  >
                    <option value="">Selecciona un municipio</option>
                    <option>Atizapán de Zaragoza</option>
                    <option>Naucalpan</option>
                    <option>Tlalnepantla</option>
                    <option>Cuautitlán Izcalli</option>
                  </select>
                </div>

                <div className="formField">
                  <label>
                    Calle <em>*</em>
                  </label>

                  <input
                    type="text"
                    value={calle}
                    onChange={(e) => setCalle(e.target.value)}
                    placeholder="Nombre de la calle"
                    required
                  />
                </div>

                <div className="formField">
                  <label>
                    Colonia <em>*</em>
                  </label>

                  <input
                    type="text"
                    value={colonia}
                    onChange={(e) => setColonia(e.target.value)}
                    placeholder="Nombre de la colonia"
                    required
                  />
                </div>

                <div className="formField full">
                  <label>
                    Referencias del lugar <em>*</em>
                  </label>

                  <textarea
                    value={referencias}
                    onChange={(e) => setReferencias(e.target.value)}
                    placeholder="Ej. frente a una escuela, junto a un parque..."
                    rows="3"
                    required
                  />
                </div>

              </div>

              <div className="locationBox">

                <div className="locationIcon">⌖</div>

                <div className="locationText">
                  <strong>Ubicación del reporte</strong>

                  <p>
                    Puedes utilizar tu ubicación actual o colocar
                    manualmente el punto en el mapa.
                  </p>
                </div>

                <button
                  type="button"
                  className="locationButton"
                  onClick={obtenerUbicacion}
                >
                  Usar mi ubicación
                </button>

              </div>

              <div className="mapBox">

                <div className="mapPlaceholder">
                  <span>📍</span>

                  <strong>
                    Selecciona la ubicación en el mapa
                  </strong>

                  <small>
                    Si el GPS no funciona, puedes colocar el marcador
                    manualmente.
                  </small>

                  <button
                    type="button"
                    className="mapButton"
                    onClick={seleccionarUbicacionManual}
                  >
                    Colocar ubicación manualmente
                  </button>
                </div>

              </div>

              {ubicacion && (
                <div className="locationResult">
                  ✓ {ubicacionManual
                    ? "Ubicación seleccionada manualmente"
                    : `Ubicación obtenida: ${ubicacion}`}
                </div>
              )}

              <div className="evidenceSection">

                <div className="evidenceTitle">
                  <div>
                    <h3>Fotografía referencial</h3>

                    <p>
                      Opcional · Máximo 2 archivos · 15 MB por archivo
                    </p>
                  </div>
                </div>

                <label className="uploadBox">
                  <span>＋</span>

                  <strong>
                    Subir fotografía o documento
                  </strong>

                  <small>
                    Puedes adjuntar hasta 2 archivos.
                  </small>

                  <input
                    type="file"
                    accept="image/*,.pdf,.doc,.docx"
                    multiple
                    onChange={manejarArchivos}
                  />
                </label>

                {archivos.length > 0 && (
                  <div className="fileList">
                    {archivos.map((archivo, index) => (
                      <div
                        className="fileItem"
                        key={`${archivo.name}-${index}`}
                      >
                        <span>{archivo.name}</span>

                        <button
                          type="button"
                          onClick={() => eliminarArchivo(index)}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="privacyWarning">
                  <strong>Importante antes de tomar una fotografía</strong>

                  <p>
                    Las fotografías deben mostrar únicamente el entorno o
                    lugar de trabajo para facilitar la localización.
                    <strong> No captures rostros de niñas, niños o adolescentes
                    ni expongas tu seguridad o integridad.</strong>
                  </p>
                </div>

              </div>

              <div className="formActions">

                <button
                  type="button"
                  className="formButton secondary"
                  onClick={() => setPaso(2)}
                >
                  ← Regresar
                </button>

                <button
                  type="button"
                  className="formButton primary"
                  onClick={() => setPaso(4)}
                  disabled={!paso3Completo}
                >
                  Continuar →
                </button>

              </div>

            </div>
          )}

          {paso === 4 && (
            <div className="formModule">

              <div className="moduleTitle">
                <span>04</span>

                <div>
                  <h2>Revisa tu reporte</h2>

                  <p>
                    Comprueba que la información sea correcta antes de enviarla.
                  </p>
                </div>
              </div>

              <div className="reviewSection">

                <div className="reviewHeader">
                  <span>01</span>
                  <strong>Tipo de reporte</strong>
                </div>

                <div className="reviewContent">
                  <p>
                    {tipoReporte === "anonimo"
                      ? "Reporte anónimo"
                      : "Reporte con seguimiento"}
                  </p>

                  {correo && <p>{correo}</p>}
                </div>

                <div className="reviewHeader">
                  <span>02</span>
                  <strong>Información de la situación</strong>
                </div>

                <div className="reviewContent reviewGrid">

                  <div>
                    <small>Menores</small>
                    <p>{numeroMenores}</p>
                  </div>

                  <div>
                    <small>Edad</small>
                    <p>{edades}</p>
                  </div>

                  <div>
                    <small>Género</small>
                    <p>{genero}</p>
                  </div>

                  <div>
                    <small>Actividad</small>
                    <p>{actividad}</p>
                  </div>

                  <div>
                    <small>Día</small>
                    <p>{dia}</p>
                  </div>

                  <div>
                    <small>Horario</small>
                    <p>{hora}</p>
                  </div>

                  <div className="reviewFull">
                    <small>Descripción</small>
                    <p>{descripcion}</p>
                  </div>

                  {observaciones && (
                    <div className="reviewFull">
                      <small>Observaciones</small>
                      <p>{observaciones}</p>
                    </div>
                  )}

                </div>

                <div className="reviewHeader">
                  <span>03</span>
                  <strong>Ubicación</strong>
                </div>

                <div className="reviewContent reviewGrid">

                  <div>
                    <small>Municipio</small>
                    <p>{municipio}</p>
                  </div>

                  <div>
                    <small>Colonia</small>
                    <p>{colonia}</p>
                  </div>

                  <div>
                    <small>Calle</small>
                    <p>{calle}</p>
                  </div>

                  <div className="reviewFull">
                    <small>Referencias</small>
                    <p>{referencias}</p>
                  </div>

                  <div className="reviewFull">
                    <small>Ubicación</small>
                    <p>{ubicacion}</p>
                  </div>

                </div>

                <div className="reviewHeader">
                  <span>04</span>
                  <strong>Evidencia y riesgo</strong>
                </div>

                <div className="reviewContent">

                  <p>
                    Situación de riesgo: <strong>{riesgo}</strong>
                  </p>

                  <p>
                    Archivos adjuntos:{" "}
                    <strong>
                      {archivos.length === 0
                        ? "Ninguno"
                        : `${archivos.length} archivo(s)`}
                    </strong>
                  </p>

                </div>

              </div>

              <div className="riskQuestion">

                <h3>
                  ¿Observaste alguna situación de riesgo? <em>*</em>
                </h3>

                <div className="riskOptions">

                  {["Sí", "No", "No sé"].map((opcion) => (
                    <button
                      key={opcion}
                      type="button"
                      className={
                        riesgo === opcion
                          ? "riskOption selected"
                          : "riskOption"
                      }
                      onClick={() => setRiesgo(opcion)}
                    >
                      {opcion}
                    </button>
                  ))}

                </div>

              </div>

              <div className="confirmationBox">

                <span>✓</span>

                <div>
                  <strong>
                    ¿Todo está correcto?
                  </strong>

                  <p>
                    {tipoReporte === "anonimo"
                      ? "Tu reporte será enviado de forma anónima y no se generará un folio de seguimiento."
                      : "Tu reporte será registrado y recibirás un folio para consultar su seguimiento."}
                  </p>
                </div>

              </div>

              <div className="formActions">

                <button
                  type="button"
                  className="formButton secondary"
                  onClick={() => setPaso(3)}
                >
                  ← Regresar
                </button>

                <button
                  type="submit"
                  className="formButton primary"
                  disabled={!paso4Completo}
                >
                  Confirmar y enviar
                </button>

              </div>

            </div>
          )}

        </form>
      </section>
    </main>
  );
}