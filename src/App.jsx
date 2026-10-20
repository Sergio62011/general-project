import { useTextos } from "./hooks/useTextos.js";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  // Idiom por defecto español
  const [idioma, setIdioma] = useState("es");
  const { textos, cargando, error, recargar } = useTextos(idioma);

  return (
    <div className="sitio">
      <Navbar
        textos={textos}
        cargando={cargando}
        error={error}
        idioma={idioma}
        onBuscar={(consulta) => console.log("Buscar:", consulta)}
      />
    </div>
  );
}

export default App;
