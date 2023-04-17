import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import { SignedIn, useUser } from "@clerk/nextjs";
import uniqid from "uniqid";
import tweeterLogo from "./../../assets/images/tweeter20-logo.png";

const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-4 w-4 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-green-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18.293 3.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l4.293 4.293 10-10z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

function isWithin10Seconds(datetime1, datetime2) {
  const diff = Math.abs(datetime1.getTime() - datetime2.getTime());
  return diff <= 10000; // 10000 milliseconds = 10 seconds
}

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
  const [loadingStatusIndex, setLoadingStatusIndex] = useState(0);
  const [isNewUserCreated, setIsNewUserCreated] = useState(false);
  const [isLoadingStatusDisplayed, setIsLoadingStatusDisplayed] =
    useState(false);

  useEffect(() => {
    if (!user || !isWithin10Seconds(new Date(), new Date(user.createdAt))) {
      router.push("/dashboard");
    }
  }, [user, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loadingStatusIndex < LOADING_STATUS.length - 1) {
        setLoadingStatusIndex((ps) => ps + 1);
      } else {
        setIsLoadingStatusDisplayed(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [loadingStatusIndex]);

  const createNewUser = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsNewUserCreated(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (user && isWithin10Seconds(new Date(), new Date(user.createdAt))) {
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
            <h1 className="text-4xl font-extrabold mb-4 text-gray-700">
              Hey, {user.firstName}!
            </h1>

            <div className="flex space-x-2 items-center mb-6">
              {activeStatus.Icon}
              <p className="text-base text-gray-400">{activeStatus.status}</p>
            </div>

            <Link
              href="/dashboard"
              className={
                isProfileReady
                  ? "block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-normal"
                  : "block w-full text-center py-2 px-4 bg-gray-400 text-gray-200 rounded-md font-normal disabled:opacity-50 cursor-not-allowed"
              }
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
