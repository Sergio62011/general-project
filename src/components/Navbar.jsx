import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Icono from "./Icono.jsx";

const DESTINOS = {
  album: "#album",
  sobres: "#sobres",
  intercambios: "#intercambios",
  mundos: "#mundos",
  ranking: "#ranking",
};

const Navbar = ({ textos, cargando, error, idioma, onBuscar }) => {
  const [abierto, setAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const botonMenu = useRef(null);
  const campoBusqueda = useRef(null);
  const nav = textos?.navbar;
  const ingles = idioma === "en";

  const abrir = nav?.menuMovil?.abrir ?? (ingles ? "Open menu" : "Abrir menú");
  const cerrar =
    nav?.menuMovil?.cerrar ?? (ingles ? "Close menu" : "Cerrar menú");

  const enlaces = Object.entries(nav?.enlaces ?? {}).filter(
    ([clave]) => DESTINOS[clave],
  );
  console.log(enlaces);

  useEffect(() => {
    function cerrarConEscape(evento) {
      if (!abierto) return;
      if (evento.key === "Escape" && abierto) {
        setAbierto(false);
        botonMenu.current?.focus();
      }
    }
    document.addEventListener("keydown", cerrarConEscape);
    return () => document.removeEventListener("keydown", cerrarConEscape);
  }, [abierto]);

  function abrirBusqueda() {
    setAbierto(true);
    requestAnimationFrame(() => campoBusqueda.current?.focus());
  }

  function buscar(evento) {
    evento.preventDefault();
    const consulta = busqueda.trim();
    if (!consulta) return;
    onBuscar(consulta);
    setAbierto(false);
  }

  return (
    <header className="navbar">
      <nav
        className="navbar-interior"
        aria-label={nav?.aria.menu ?? "Menú de navegación"}
      >
        <a
          href="#inicio"
          className="navbar-marca"
          aria-label={nav?.logo.aria ?? "Inicio"}
          onClick={() => setAbierto(false)}
        >
          <span className="navbar-simbolo" aria-hidden="true">
            <Icono nombre="logo" />
          </span>
          <span className="titular-h3">{nav?.logo.texto ?? "a"}</span>
        </a>

        <div className="navbar-movil-acciones">
          <button
            type="button"
            ref={botonMenu}
            className="navbar-button"
            aria-label={abierto ? cerrar : abrir}
            aria-expanded={abierto}
            aria-controls="navbar-panel"
            onClick={() => setAbierto((valor) => !valor)}
          >
            <Icono nombre={abierto ? "cerrar" : "menu"} />
          </button>
        </div>

        <div
          className={`navbar-panel${abierto ? " is-abierto" : ""}`}
          aria-busy={cargando}
          id="navbar-panel"
        >
          <ul className="navbar-enlaces">
            {enlaces.map(([clave, texto]) => (
              <li key={clave}>
                <a href={`#${clave}`} className="cuerpo-p-fuerte">
                  {texto}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-buscador">
            <Icono nombre="buscar" />
            <input
              type="search"
              className="navbar-buscador-input cuerpo-p"
              placeholder={nav?.buscador?.placeholder ?? "Buscar..."}
              aria-label={nav?.buscador?.aria ?? "Buscar"}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && buscar(e)}
            />
          </div>
          <div className="navbar-sesion">
            <a href="#ingresar" className="navbar-accion detalle-nota-fuerte">
              {nav?.botones?.ingresar ?? "Ingresar"}
            </a>
            <a
              href="#crear-cuenta"
              className="navbar-accion detalle-nota-fuerte navbar-accion--primario"
            >
              {nav?.botones?.crearCuenta ?? "Crear cuenta"}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
