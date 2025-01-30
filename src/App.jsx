import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderAndFooterExample from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <HeaderAndFooterExample />
      </>
  );
}

export default App;
