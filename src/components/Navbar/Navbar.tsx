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
        <NavLink to="/about">Acerca de </NavLink>
        {usuario ? 
        (<><span>Hola{usuario.nombre}</span>
        
        <button type="button" onClick= {cerrarSesion}>Cerrar sesion</button></>):
        
        <NavLink to= "/sing-in">Iniciar sesion</NavLink>}

      </nav>
    </header>
  );
};

export default Navbar;
