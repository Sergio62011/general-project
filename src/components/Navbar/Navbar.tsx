import { NavLink } from "react-router-dom";
import type { Sesion } from "../../model";

const Navbar = ({
  usuario,
  cerrarSesion,
}: Pick<Sesion, "usuario" | "cerrarSesion">) => {
  return (
    <header className="cabecera">
      <nav aria-label="Navegacion principal">
        <strong>Taquilla</strong>
        <NavLink to="/">Inicio</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
