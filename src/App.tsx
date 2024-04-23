import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MantineProvider } from "@mantine/core";
import HomePage from "./pages/Home";
import "@mantine/core/styles.css";
import { AdoptationProvider } from "./context/AdoptationContext";

function App() {
  return (
    <>
      <AdoptationProvider>
        <MantineProvider>
          <BrowserRouter>
            <Navbar />
            <div className="p-5 max-w-3xl mx-auto">
              <Routes>
                <Route path={"/"} element={<HomePage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </MantineProvider>
      </AdoptationProvider>
    </>
  );
}

export default App;
