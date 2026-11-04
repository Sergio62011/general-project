import { useState } from "react";
import type { Usuario } from "./model";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Footer as Inicio } from "./Pages/Inicio";
import { Ingresar } from "./Pages/Ingresar";
import Acerca from "./Pages/Acerca";



const App = () => {
  /* Guardar un usuario que inicio sesion
     Valor inicial de usuario => (null)
     La información del usuario la puedo guardar en el objeto Usuario o null => <Usuario | null> */
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  return (
    <Routes>
      <Route
        element={
          <PublicLayout
            usuario={usuario}
            iniciarSesion={() => setUsuario({ nombre: "Jhon Doe" })}
            cerrarSesion={() => setUsuario(null)}
          />
        }
      >
        <Route index element={<Inicio />} />
        <Route path="about" element={<Acerca />} />
        <Route index element={<Ingresar />} />
      </Route>
    </Routes>
  );
};

export default App;