import { Link } from "react-router-dom";

import AdoptationCart from "../Cart/AdoptationCart";

const Navbar = () => {
  return (
    <nav className="flex bg-[#242424] sticky top-0 z-10 justify-between p-5 font-semibold text-white shadow-md">
      <div className="flex justify-between mx-auto w-full max-w-5xl">
        <Link to={"/"}>
          <h1 className="lg:text-3xl text-2xl">Adopt Doggo</h1>
        </Link>
        <AdoptationCart />
      </div>
    </nav>
  );
};

export default Navbar;
