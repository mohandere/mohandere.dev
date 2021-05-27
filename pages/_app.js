import Head from 'next/head'
import Prism from 'prism-react-renderer/prism'

import 'nextra-theme-blog/style.css'
import '../styles/main.css'

(typeof global !== "undefined" ? global : window).Prism = Prism;

// require("prismjs/components/prism-js")
// require("prismjs/components/prism-jsx")
// require("prismjs/components/prism-tsx")
// require("prismjs/components/prism-typescript")
// require("prismjs/components/prism-json")

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link
        rel="preload"
        href="/fonts/Inter-roman.latin.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}
