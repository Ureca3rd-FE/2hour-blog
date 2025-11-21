import Image from "next/image";
import logo from "@/public/images/logo-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="layout-items">
        <Image src={logo} alt="logo" />
        <div className="footer-menu">
          <div className="left">Additional Link</div>
          <div className="center">Additional Link</div>
          <div>Additional Link</div>
        </div>
        <div className="copyright">© Your Company 2022. We love you!</div>
      </div>
    </div>
  );
};

export default Footer;
