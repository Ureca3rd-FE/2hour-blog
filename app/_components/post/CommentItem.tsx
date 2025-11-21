import profile from "@/public/images/profile.svg";
import Image from "next/image";

const CommentItem = ({ comment }: { comment: { name: string; content: string } }) => {
  return (
    <div className="comment-block">
      <div className="profile-area">
        <Image src={profile} alt="profile" />
        <div>{comment.name}</div>
      </div>

      <div className="comment-content-area">
        <div className="comment-content">{comment.content}</div>
        <div className="comment-under">
          <div className="comment-reply">Reply</div>
          <div className="comment-time">a min ago</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
