import '../styles/globals.css'; // Importa tus estilos globales, si los tienes
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <h1>Foro Anónimo</h1>
      </header>
      {/* El componente correspondiente a cada página se renderiza aquí */}
      <Component {...pageProps} />
      <footer>
        <p>&copy; 2025 Foro Anónimo</p>
      </footer>
    </div>
  );
}

export default MyApp;
