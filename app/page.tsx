import Image from "next/image";
import arrow from "@/public/images/arrow.svg";
import PostCard from "./_components/common/PostCard";

export default function Home() {
  return (
    <div className="main-content">
      <div className="align-title">
        <div className="featured-post">Featured Posts</div>
        <div className="more">
          More
          <Image src={arrow} alt="arrow" width={50} height={50} />
        </div>
      </div>
      <div className="align-card">
        <PostCard />
        <PostCard />
      </div>

      <div className="short-line" />
    </div>
  );
}
