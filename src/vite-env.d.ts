/// <reference types="vite/client" />

declare module '*.pdf' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_FEEDBACK_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
