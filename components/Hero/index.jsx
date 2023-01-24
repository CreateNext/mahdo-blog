import Post from "../Post";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__top">
        <h1 className="hero__title">Mahdo Blog</h1>
        <p className="hero__info">
          Content sharing platform for creative writers with invite-only access.
        </p>
      </div>

      <div className="hero__featured">
        <Post />
      </div>
    </section>
  );
};

export default Hero;
