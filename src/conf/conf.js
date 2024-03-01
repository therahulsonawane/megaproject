const conf = {
  appwirteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwirteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwirteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwirteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTON_ID),
  appwirteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
