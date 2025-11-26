import Tag from "../common/Tag";
import Image from "next/image";
import facebook from "@/public/images/facebook.svg";
import twitter from "@/public/images/twitter.svg";
import instagram from "@/public/images/instagram.svg";

const Share = () => {
  return (
    <div className="share-container">
      <div className="sns-container">
        <div>Share this</div>

        <div className="sns">
          <Image src={facebook} alt="facebook" width={40} height={40} />
          <Image src={twitter} alt="twitter" width={40} height={40} />
          <Image src={instagram} alt="instagram" width={40} height={40} />
        </div>
      </div>
      <div className="tag-container">
        <Tag text="design" />
        <Tag text="web" />
      </div>
    </div>
  );
};

export default Share;
