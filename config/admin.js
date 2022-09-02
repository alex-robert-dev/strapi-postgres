module.exports = ({ env }) => ({
  apiToken: {
    salt: env("ADMIN_TOKEN_SALT", "1c30d94918ec7e7589ebe754c8b2d51a"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b4dbad35-6caa-4f84-be56-90d0d3bc2fdf"),
  },
});
