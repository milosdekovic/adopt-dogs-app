import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1>Adopt Paws</h1>
      </Link>
    </div>
  );
};

export default Navbar;
