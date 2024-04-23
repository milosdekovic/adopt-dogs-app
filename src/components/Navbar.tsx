import { Link } from "react-router-dom";

import AdoptationCart from "./AdoptationCart";

const Navbar = () => {
  return (
    <nav className="flex bg-[#242424] sticky top-0 z-10 justify-between items-center p-5 font-semibold text-white shadow-md">
      <Link to={"/"}>
        <h1 className="text-3xl">Adopt Doggo</h1>
      </Link>
      <AdoptationCart />
    </nav>
  );
};

export default Navbar;
