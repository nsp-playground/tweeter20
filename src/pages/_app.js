import { useEffect } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import "@/styles/globals.scss";

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages = [
  "/",
  "/sign-in",
  "/create-your-account",
  "/sign-in/[[...index]]",
  "/create-your-account/[[...index]]",
];

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  useEffect(() => {
    console.log(`App version: ${window.__APP_VERSION__}`);
  }, []);

  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoPlacement: "inside",
          socialButtonsVariant: "blockButton",
          socialButtonsPlacement: "top",
        },
      }}
      {...pageProps}
    >
      {isPublicPage ? (
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
