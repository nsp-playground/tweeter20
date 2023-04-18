import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import { SignedIn, useUser } from "@clerk/nextjs";
import uniqid from "uniqid";
import LoadingIcon from "@/components/LoadingIcon/LoadingIcon";
import CheckIcon from "@/components/CheckIcon/CheckIcon";
import verifyIsNewUser from "@/utils/verifyIsNewUsers";
import tweeterLogo from "./../../assets/images/tweeter20-logo.png";

const LOADING_STATUS = [
  {
    Icon: <LoadingIcon />,
    status: "We are setting up your profile...",
  },
  { Icon: <LoadingIcon />, status: "Almost there..." },
  { Icon: <LoadingIcon />, status: "So close, I promise..." },
];

const READY_STATUS = {
  Icon: <CheckIcon />,
  status: "Ready!",
};

export default function NewUserGreeting(props) {
  const router = useRouter();
  const { user } = useUser();
  console.log({ user });

  const [loadingStatusIndex, setLoadingStatusIndex] = useState(0);
  const [isNewUserCreated, setIsNewUserCreated] = useState(false);
  const [isLoadingStatusDisplayed, setIsLoadingStatusDisplayed] =
    useState(false);

  useEffect(() => {
    if (!user) return;
    const timer = setInterval(() => {
      if (loadingStatusIndex < LOADING_STATUS.length - 1) {
        setLoadingStatusIndex((ps) => ps + 1);
      } else {
        setIsLoadingStatusDisplayed(true);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [loadingStatusIndex, user]);

  const createNewUser = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsNewUserCreated(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    if (user || verifyIsNewUser(user)) {
      console.log({ user });
      const newUser = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        fullName: user?.fullName,
        id: uniqid(),
        createdAt: user?.createdAt,
        email: user?.primaryEmailAddress?.emailAddress,
        avatar: user.profileImageUrl,
      };
      console.log({ newUser });
      createNewUser(newUser);
    }
  }, [user, createNewUser]);

  const isProfileReady = isLoadingStatusDisplayed && isNewUserCreated;
  const activeStatus = isProfileReady
    ? READY_STATUS
    : LOADING_STATUS[loadingStatusIndex];

  if (!verifyIsNewUser(user)) {
    router.push("/dashboard");
    return null;
  }

  return (
    <>
      <Head>
        <title>Tweeter 2.0 - Dashboard</title>
        <meta name="description" content="Tweeter 2.0 - New Look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignedIn>
        <main className="NewUserGreeting p-6 h-full w-full rounded-xl bg-gray-200 flex flex-col justify-center">
          <section className="flex flex-col justify-center">
            <Image
              src={tweeterLogo}
              alt="Tweeter20 Logo"
              className="mb-4 rounded-lg"
              width={150}
            />
            <h1 className="text-4xl font-extrabold mb-4 text-white">
              Hey, {user.firstName}!
            </h1>

            <div className="flex space-x-2 items-center mb-6">
              {activeStatus.Icon}
              <p className="text-base text-gray-400">{activeStatus.status}</p>
            </div>

            <Link
              href="/dashboard"
              className={`block w-full text-center py-2 px-4 rounded-md font-normal ${
                isProfileReady
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-400 text-gray-300 disabled:opacity-50 cursor-not-allowed"
              }`}
              disabled={!isProfileReady}
            >
              Go to dashboard
            </Link>
          </section>
        </main>
      </SignedIn>
    </>
  );
}
