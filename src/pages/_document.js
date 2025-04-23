import { Html, Head, Main, NextScript } from "next/document";
import  Menu  from "./componentes/menu.js";
import  Footer  from "./componentes/footer.js";
import  Esportes  from "./esportes.js";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
