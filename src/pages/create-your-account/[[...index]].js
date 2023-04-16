import Head from "next/head";
import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function CreateYourAccountPage() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0 - Create Your Account</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="CreateYourAccountPage px-6 h-full w-full rounded-xl">
        <section className="my-10">
          <SignUp
            path="/create-your-account"
            routing="path"
            signInUrl="/sign-in"
            redirectUrl="/dashboard"
          />
        </section>
      </main>
    </>
  );
}
