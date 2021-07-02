import Head from "next/head";
import { Provider, UpdownButton } from "@lyket/react";
import { useRouter } from "next/router";

import "nextra-theme-blog/style.css";
import "../styles/main.css";

const canShowUpdownButton = (pathname = "") => {
  if (pathname.indexOf("/posts/") !== -1) {
    return true;
  }
  if (pathname.indexOf("/dev-tips/") !== -1) {
    return true;
  }
  return false;
};
const getShowUpdownButtonProps = (pathname = "") => {
  const pageId = pathname.split("/").pop();
  if (pathname.indexOf("/posts/") !== -1) {
    return {
      id: pageId,
      namespace: "posts",
    };
  }
  if (pathname.indexOf("/dev-tips/") !== -1) {
    return {
      id: pageId,
      namespace: "dev-tips",
    };
  }
  return {
    id: pageId,
    namespace: "page",
  };
};

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const showUpdownButton = canShowUpdownButton(pathname);
  const updownButtonProps = getShowUpdownButtonProps(pathname);

  return (
    <>
      <Provider apiKey="pt_486fd32c067690889ba35056819b7f">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        {showUpdownButton && (
          <div className="like-dislike-button-container">
            <UpdownButton {...updownButtonProps} />
          </div>
        )}
      </Provider>
    </>
  );
}
