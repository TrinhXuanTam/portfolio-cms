export default ({ env }) => {
  // Only configure the Firebase upload provider when its service account is
  // present. Without this guard, JSON.parse(undefined) throws at boot on any
  // environment that has not set SERVICE_ACCOUNT (local dev, CI builds).
  const serviceAccount = env("SERVICE_ACCOUNT");

  if (!serviceAccount) {
    return {};
  }

  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: JSON.parse(serviceAccount),
          // Custom bucket name
          bucket: env("STORAGE_BUCKET_URL"),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  };
};
