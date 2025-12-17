/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HASHNODE_HOSTNAME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

