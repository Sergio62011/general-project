const TRAZOS = {
  buscar: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  cerrar: <path d="m6 6 12 12M6 18 18 6" />,
  favoritos: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  idioma: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z" />
    </>
  ),
  accesibilidad: (
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M4 8h16M12 6v8m0 0-4 7m4-7 4 7" />
    </>
  ),
  logo: (
    <>
      <path
        d="M12 2.79999L14.8 8.59999L21.2 9.49999L16.6 14L17.7 20.3L12 17.3L6.29999 20.3L7.39999 14L2.79999 9.49999L9.19999 8.59999L12 2.79999Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function Icono({ nombre }) {
  return (
    <svg
      viewBox="2 2 20 20"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {TRAZOS[nombre]}
    </svg>
  );
}
