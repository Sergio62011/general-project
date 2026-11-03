export type Usuario = {
  nombre: string;
};

export type Sesion = {
  usuario: Usuario | null;
  iniciarSesion: () => void;
  cerrarSesion: () => void;
  cambiarContrasena: () => void;
};
