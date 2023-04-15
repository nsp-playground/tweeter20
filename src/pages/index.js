import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import cardsClipart from "../assets/images/cards-clipart.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Home get-started px-6 h-full w-full rounded-xl">
        <section className="card cliparts">
          <div className="mx-auto py-10">
            <Image
              src={cardsClipart}
              alt="Cards Clipart"
              className="mx-auto"
              width={350}
            />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            All Community Activities in Your Hands
          </h1>

          <p className="text-gray-300 text-lg font-light mb-8">
            Create and promote their own events, connect with other community
            members, and share their experiences with others
          </p>

          <Link href={"/create-your-account"}>
            <button
              type="button"
              className="w-full rounded-md py-3 px-2 font-medium uppercase bg-white flex items-center justify-center"
              style={{ color: "#1e85ff" }}
            >
              <BsFillBookmarkCheckFill size={"1rem"} className="mr-2" />{" "}
              <span>Get Started</span>
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
