import { IconPawFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 font-semibold bg-white shadow-md">
      <Link to={"/"}>
        <h1 className="text-3xl">Adopt Paws</h1>
      </Link>
      <Link to={"/cart"}>
        <IconPawFilled />
      </Link>
    </div>
  );
};

export default Navbar;
