export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(env("SERVICE_ACCOUNT")),
        // Custom bucket name
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true, // true | false
        debug: false, // true | false
      },
    },
  },
});
