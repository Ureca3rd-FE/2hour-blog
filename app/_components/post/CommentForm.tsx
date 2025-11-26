const CommentForm = () => {
  return (
    <div className="comment-area">
      <input className="input-username" placeholder="Username..." />
      <input className="input-comment" placeholder="Your Comment..." />
      <button className="button-submit">Comment</button>
    </div>
  );
};

export default CommentForm;
