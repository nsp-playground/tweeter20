import { useEffect } from "react";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import "@/styles/globals.scss";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const isPublicPath = ["/"].includes(pathname);

  useEffect(() => {
    console.log(`App version: ${window.__APP_VERSION__}`);
  }, []);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPath ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
