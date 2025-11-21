const mockPost = {
  title: "Post Title",
  category: "Category",
  author: "Author",
  content:
    " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
};

const PostCard = () => {
  return (
    <div className="postcard">
      <div className="card-thumbnail" />
      <div className="card-content">
        <div className="title">{mockPost.title}</div>
        <p>
          <span className="author">{mockPost.author}</span>
          <span className="created-at">a min ago</span>
        </p>
        <div className="content">{mockPost.content}</div>
      </div>
    </div>
  );
};

export default PostCard;
