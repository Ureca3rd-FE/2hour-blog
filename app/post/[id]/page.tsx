import MorePosts from "@/app/_components/post/MorePosts";
import PostContent from "@/app/_components/post/PostContent";
import Share from "@/app/_components/post/Share";
import Comment from "@/app/_components/post/Comment";

const PostDetail = () => {
  return (
    <div className="post-detail">
      <PostContent />
      <div className="line" />
      <Share />
      <MorePosts />
      <Comment />
    </div>
  );
};

export default PostDetail;
