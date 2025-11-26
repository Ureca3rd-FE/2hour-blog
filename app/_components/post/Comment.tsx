import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const mockComment = [
  {
    name: "user1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.",
  },
  {
    name: "user2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.",
  },
  {
    name: "user3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.",
  },
];

const Comment = () => {
  return (
    <div className="comment-container">
      <h1>Comments</h1>
      <CommentForm />
      <div className="comment-list">
        {mockComment.map((comment, index) => {
          return <CommentItem key={index} comment={comment} />;
        })}
      </div>
    </div>
  );
};
export default Comment;
