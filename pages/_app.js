import Head from 'next/head'

import 'nextra-theme-blog/style.css'
import '../styles/main.css'

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
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}
