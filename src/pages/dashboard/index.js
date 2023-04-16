import Head from "next/head";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Tweeter 2.0 - Dashboard</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="DashboardPage bg-slate-200 p-6 h-full w-full rounded-xl">
        <section className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </section>
      </main>
    </>
  );
}
