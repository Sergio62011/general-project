import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Sesion } from "../model";

export const Ingresar = () => {
  // PublicLayout es padre de Ingresar
  const { usuario, iniciarSesion } = useOutletContext<Sesion>();
  /* useNavigate cambia la ruta sin recargar la aplicación */
  const navegar = useNavigate();

  function ingresar() {
    iniciarSesion();
    navegar("/");
  }

  return (
    <section>
      <h1>Iniciar sesión</h1>
      <p>Demostración local</p>
      {usuario ? (
        <Link to="/">Volver al Inicio</Link>
      ) : (
        <button type="button" onClick={ingresar}>
          Entrar como Jhon Doe
        </button>
      )}
    </section>
  );
};
