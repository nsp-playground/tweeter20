import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
// import PostForm from "@/components/PostForm";
// import Post from "@/components/Post";
// import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0 - Dashboard</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex justify-space-between">
          <h1>Dashboard</h1>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </section>
      </main>
    </>
  );
}
