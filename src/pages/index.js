import Head from "next/head";
import PostForm from "@/components/PostForm";
import Post from "@/components/Post";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Fix 1</h1>
        <section className="section top">
          <Profile username="shakib" status="Offline" />
        </section>

        <section className="section posts">
          <h2 className="header">Posts</h2>
          <ul className="post-list">
            <li className="post-item">
              <Post
                content="Working on my first project with Figma, really excited, wish me luck!"
                timeline="Feb 2, 2023 @ 4:45pm"
              />
            </li>
            <li className="post-item">
              <Post
                content="Did you know that Figma can be used in both web and in an app, pretty cool! For now, I am going to use the web platform..."
                timeline="Feb 2, 2023 @ 4:45pm"
              />
            </li>
          </ul>
        </section>

        <section className="section input">
          <PostForm />
        </section>
      </main>
    </>
  );
}
