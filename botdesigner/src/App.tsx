import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
