import Image from "next/image";
import logo from "@/public/images/logo-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="layout-items">
        <div className="layout-item">
          <Image src={logo} alt="logo" />
        </div>
        <div className="footer-menu layout-item">
          <div>Additional Link</div>
          <div>Additional Link</div>
          <div>Additional Link</div>
        </div>
        <div className="copyright">© Your Company 2022. We love you!</div>
      </div>
    </div>
  );
};

export default Footer;
