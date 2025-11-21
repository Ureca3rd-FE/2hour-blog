import PostPreview from "./PostPreview";

const mockPost = ["Post Title 01", "Post Title 02", "Post Title 03"];

const MorePosts = () => {
  return (
    <>
      <div className="more-title">More Posts</div>
      <div className="more-post">
        {mockPost.map((post, index) => {
          return <PostPreview key={index} title={post} />;
        })}
      </div>
    </>
  );
};

export default MorePosts;
