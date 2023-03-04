import { posts } from "../../data";
import Post from "../Post";

const MasonPosts = () => {
  return (
    <section className="posts">
      <div className="posts__container">
        {posts.map(({ id, title, banner, desc, linkHref }) => (
          <Post
            key={id}
            banner={banner}
            title={title}
            desc={desc}
            linkHref={linkHref}
          />
        ))}
      </div>
    </section>
  );
};

export default MasonPosts;
