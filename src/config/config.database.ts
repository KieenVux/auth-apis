export default () => ({
  database: {
    connection: process.env.ME_CONFIG_MONGODB_URL || '',
  },
});
