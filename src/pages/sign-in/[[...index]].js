import Head from "next/head";
import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0 - Sign In</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="CreateYourAccountPage px-6 h-full w-full rounded-xl">
        <section className="my-10">
          <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/create-your-account"
            redirectUrl="/dashboard"
          />
        </section>
      </main>
    </>
  );
}
