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
          <div className="p-5">
            <Routes>
              <Route path={"/"} element={<Paws />} />
              <Route path={"/cart"} element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
