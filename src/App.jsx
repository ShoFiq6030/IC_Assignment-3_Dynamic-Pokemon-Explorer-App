import { Outlet } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PokemonProvider from "./providers/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <div className="mx-auto max-w-[1020px] ">
          <div className="container">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
