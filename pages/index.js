import ThreeEditor from '../components/ThreeEditor';
import Script from 'next/script';

export default function Home() {
   return (
      <>
         <Script
            src="https://unpkg.com/@ffmpeg/ffmpeg@0.9.6/dist/ffmpeg.min.js"
            defer
         />

         <Script src="../examples/js/libs/draco/draco_encoder.js" />

         <Script src="js/libs/codemirror/codemirror.js" />
         <Script src="js/libs/codemirror/mode/javaScript.js" />
         <Script src="js/libs/codemirror/mode/glsl.js" />

         <Script src="js/libs/esprima.js" />
         <Script src="js/libs/jsonlint.js" />

         <Script src="js/libs/codemirror/addon/dialog.js" />
         <Script src="js/libs/codemirror/addon/show-hint.js" />
         <Script src="js/libs/codemirror/addon/tern.js" />
         <Script src="js/libs/acorn/acorn.js" />
         <Script src="js/libs/acorn/acorn_loose.js" />
         <Script src="js/libs/acorn/walk.js" />
         <Script src="js/libs/ternjs/polyfill.js" />
         <Script src="js/libs/ternjs/signal.js" />
         <Script src="js/libs/ternjs/tern.js" />
         <Script src="js/libs/ternjs/def.js" />
         <Script src="js/libs/ternjs/comment.js" />
         <Script src="js/libs/ternjs/infer.js" />
         <Script src="js/libs/ternjs/doc_comment.js" />
         <Script src="js/libs/tern-threejs/threejs.js" />
         <Script src="js/libs/signals.min.js" />

         <Script
            async
            src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"
         />

         <ThreeEditor />
      </>
   );
}
