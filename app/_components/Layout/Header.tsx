import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="layout-items">
        <Image src={logo} alt="logo" />
        <div className="header-menu">
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
        </div>
        <div className="search">
          <div>Search</div>
          <input />
        </div>
      </div>
      <div className="line" />
    </div>
  );
};

export default Header;
