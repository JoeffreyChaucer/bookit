module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['res.cloudinary.com'],
  },

  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/book-it',
    DB_URI: '',
    CLOUDINARY_CLOUD_NAME: '',
    CLOUDINARY_API_KEY: '',
    CLOUDINARY_SECRET_KEY: '',

    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',
    SMTP_FROM_NAME: '',
    SMTP_FROM_EMAIL: '',

    NEXTAUTH_URL: '',

    STRIPE_WEBHOOK_SECRET: '',

    STRIPE_API_KEY: '',
    STRIPE_SECRET_KEY: '',
  },
};
