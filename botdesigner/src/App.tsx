import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";
import { Rotas } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
      </BrowserRouter>
    </>
  );
}

export default App;
