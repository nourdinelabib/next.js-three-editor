import Head from 'next/head';

import '../styles/main.css';

import '../public/libs/codemirror/codemirror.css';
import '../public/libs/codemirror/theme/monokai.css';

import '../public/libs/codemirror/addon/dialog.css';
import '../public/libs/codemirror/addon/show-hint.css';
import '../public/libs/codemirror/addon/tern.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
               name="viewport"
               content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <title>Next.JS Three.js Editor</title>

            <link rel="manifest" href="/manifest.json" />
            <link
               href="/icons/favicon-16x16.png"
               rel="icon"
               type="image/png"
               sizes="16x16"
            />
            <link
               href="/icons/favicon-32x32.png"
               rel="icon"
               type="image/png"
               sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon"></link>
            <meta name="theme-color" content="#111" />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
