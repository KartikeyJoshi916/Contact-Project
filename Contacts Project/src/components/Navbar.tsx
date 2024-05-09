import { Link } from "react-router-dom";

const buttonStyle = "bg-black hover:bg-white hover:text-black p-2 text-white";
const linkStyle = "w-fit";

const Navbar = () => {
  return (
    <nav className="bg-darkseagreen p-4 flex basis-1/5 gap-2 flex-row md:flex-col">
      <Link to="/contacts" className={linkStyle}>
        <button className={buttonStyle}>Contacts List</button>
      </Link>
    </nav>
  );
};

export default Navbar;
