import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* SEO & Social Sharing Meta Tags */}
        <meta name="description" content="Ayami | Immersive Content for Real Estate" />

        {/* Open Graph for WhatsApp, LinkedIn, Facebook */}
        <meta property="og:title" content="Ayami | Immersive Content for Real Estate" />
        <meta
          property="og:description"
          content="Step into the future of architecture. We create hyper-realistic VR walkthroughs and cinematic visuals."
        />
        <meta property="og:image" content="https://www.ayamiprojects.com/banner.png" />
        <meta property="og:url" content="https://www.ayamiprojects.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayami | Immersive Content for Real Estate" />
        <meta
          name="twitter:description"
          content="Step into the future of architecture. We create hyper-realistic VR walkthroughs and cinematic visuals."
        />
        <meta name="twitter:image" content="https://www.ayamiprojects.com/banner.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
