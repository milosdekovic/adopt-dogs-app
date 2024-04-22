import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MantineProvider } from "@mantine/core";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import "@mantine/core/styles.css";

function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <div className="p-5">
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/cart"} element={<CartPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
