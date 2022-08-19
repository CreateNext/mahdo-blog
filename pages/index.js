import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahdo | Blog</title>
        <meta name="description" content="Entertainment, News and Celeb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Tags section */}
        <section className="tags">
          <button className="tags__button">Lifestyle</button>
          <button className="tags__button">Tech</button>
          <button className="tags__button">Entertainment</button>
          <button className="tags__button">Celeb</button>
          <button className="tags__button">Games</button>
        </section>

        {/* Hero section */}
        <section className="hero">
          <h1 className="hero__title">Mahdo blog</h1>
        </section>
      </main>
    </div>
  );
}
