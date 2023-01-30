import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Post = () => {
  return (
    <div className="post">
      <img src="img/preview.jpg" alt="banner" className="post__banner" />
      <div className="post__info">
        <h3 className="post__title">Year In Review?</h3>
        <p className="post__desc">
          Don&apos;t Know if I can call this a review, but it&apos;s something!
        </p>
        <Link href={"#"}>Read More</Link>
      </div>
    </div>
  );
};

export const FeaturedPost = () => {
  return (
    <div className="featured-post">
      <img
        src="img/preview.jpg"
        alt="banner"
        className="featured-post__banner"
      />
      <div className="featured-post__info">
        <span className="featured-post__label">Featured Post</span>
        <h3 className="featured-post__title">
          <span>Year</span> <span>In</span> <span>Review?</span>
        </h3>
        <p className="featured-post__desc">
          Don&apos;t Know if I can call this a review, but it&apos;s something!
        </p>
        <Link href={"#"}>Read More</Link>
      </div>
    </div>
  );
};

export default Post;
