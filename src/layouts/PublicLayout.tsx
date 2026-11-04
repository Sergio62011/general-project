import React from "react";

import Navbar from "../components/Navbar/Navbar";
import { Sesion } from "../model";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

const PublicLayout = ({
  usuario,
  iniciarSesion,
  cerrarSesion,
 // cambiarContrasena,
}: Sesion) => {
  return (
    <div className="sitio">
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />
      <main id="contenido" className="contenido">
        <p>
          {usuario
            ? `Sesión activa: ${usuario.nombre}`
            : "Visitante sin sesión"}
        </p>
        <Outlet
          context={
            {
              usuario,
              iniciarSesion,
              cerrarSesion,
             // cambiarContrasena,
            } satisfies Sesion
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
