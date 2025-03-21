import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Puedes agregar aquí metaetiquetas, enlaces a fuentes, etc. */}
          <meta name="description" content="Foro Anónimo donde puedes contar tu historia." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main /> {/* Aquí se renderiza el contenido principal */}
          <NextScript /> {/* Aquí se inyectan los scripts de Next.js */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
