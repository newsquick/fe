interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
