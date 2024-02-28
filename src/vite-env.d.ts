/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly GITHUB_SOURCE_BASE_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }