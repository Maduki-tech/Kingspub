import logo from "../assets/1mask.png";
import Details from "./Details";

function Header() {
  return (
    <div className="h-screen">
      <div className="bg-hero-image h-1/2">
        {
          // Logo
          //
          // TITLE
          //
          // TEXT
          //
          // Image
        }
        <img src={logo} alt="" className=" pl-12 pt-12 " />
      </div>
        <Details />
    </div>
  );
}

export default Header;
