import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="layout-items">
        <div className="layout-item">
          <Image src={logo} alt="logo" />
        </div>
        <div className="header-menu layout-item">
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
        </div>
        <div className="search">
          <div className="search-input">
            <div>Search</div>
            <input />
          </div>
        </div>
      </div>
      <div className="line" />
    </header>
  );
};

export default Header;
