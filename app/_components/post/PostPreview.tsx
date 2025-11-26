const PostPreview = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="preview-thumbnail" />
      <h3>{title}</h3>
    </div>
  );
};

export default PostPreview;
