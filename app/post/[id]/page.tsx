import Tag from "@/app/_components/common/Tag";

const mockPost = {
  title: "Post Title",
  author: "Author",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.",
  ],
};

const PostDetail = () => {
  return (
    <div className="post-detail">
      <div className="detail-info">
        <div className="link">
          <div className="home">Home</div>
          <div> / </div>
          <div>{mockPost.title}</div>
        </div>
        <h1>{mockPost.title}</h1>
        <div className="author-time">
          <div className="author">{mockPost.author} </div>
          <div>|</div>
          <div>a min ago</div>
        </div>
      </div>
      <div className="detail-content">
        <div className="thumbnail" />
        <div className="detail-text">
          {mockPost.content.map((content, index) => {
            return (
              <div className="text-block" key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
      <div className="line" />

      <Tag text="design" />
    </div>
  );
};

export default PostDetail;
