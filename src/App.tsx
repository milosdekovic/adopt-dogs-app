import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paws from "./pages/Paws";
import Cart from "./pages/Cart";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Paws />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
