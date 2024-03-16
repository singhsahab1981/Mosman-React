import { Header } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
