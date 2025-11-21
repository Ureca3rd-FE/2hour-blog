import PostContent from "@/app/_components/post/PostContent";
import Share from "@/app/_components/post/Share";

const PostDetail = () => {
  return (
    <div className="post-detail">
      <PostContent />
      <div className="line" />
      <Share />
    </div>
  );
};

export default PostDetail;
