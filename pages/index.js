import Script from 'next/script';

import dynamic from 'next/dynamic';

const ThreeEditor = dynamic(() => import('../components/ThreeEditor'), {
   ssr: false,
});

export default function Home() {
   return (
      <>
         <Script
            src="https://unpkg.com/@ffmpeg/ffmpeg@0.9.6/dist/ffmpeg.min.js"
            defer
            strategy="beforeInteractive"
         />

         <Script
            src="libs/codemirror/codemirror.js"
            strategy="beforeInteractive"
         />
         <Script src="libs/codemirror/mode/javaScript.js" />
         <Script src="libs/codemirror/mode/glsl.js" />

         <Script src="libs/esprima.js" strategy="beforeInteractive" />
         <Script src="libs/jsonlint.js" strategy="beforeInteractive" />

         <Script
            src="libs/codemirror/addon/dialog.js"
            strategy="beforeInteractive"
         />
         <Script
            src="libs/codemirror/addon/show-hint.js"
            strategy="beforeInteractive"
         />
         <Script
            src="libs/codemirror/addon/tern.js"
            strategy="beforeInteractive"
         />
         <Script src="libs/acorn/acorn.js" strategy="beforeInteractive" />
         <Script src="libs/acorn/acorn_loose.js" strategy="beforeInteractive" />
         <Script src="libs/acorn/walk.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/polyfill.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/signal.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/tern.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/def.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/comment.js" strategy="beforeInteractive" />
         <Script src="libs/ternjs/infer.js" strategy="beforeInteractive" />
         <Script
            src="libs/ternjs/doc_comment.js"
            strategy="beforeInteractive"
         />
         <Script
            src="libs/tern-threejs/threejs.js"
            strategy="beforeInteractive"
         />
         <Script src="libs/signals.min.js" strategy="beforeInteractive" />

         <Script
            async
            src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"
            strategy="beforeInteractive"
         />

         <ThreeEditor />
      </>
   );
}
