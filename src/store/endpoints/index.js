export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    BRAND_REGISTER: "auth/brands/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
    CHANGE_PASSWORD: "/auth/change-password",
    VERIFY_OTP: "/auth/verify-otp",
    RESET_PASSWORD: "/auth/reset-password",
    RESEND_OTP: "/auth/resend-otp",
    VERIFY_RECAPTCHA: "/auth/verify-recaptcha",
    CHECK_EMAIL: "/auth/check-email",
    CHECK_PHONE: "/auth/check-phone",
    CHECK_ALREADY_EXISTS: "/auth/check-already-exists",
    GET_PROFILE: "/auth/profile",
    UPLOAD_FILE: "/auth/file-upload",
  },
  ADMIN: {
    GET_BRANDS: "/brands",
    GET_BRAND: "/brands",
    BRAND_APPROVE_REJECT: "/brands",
  },
  PAYMENT: {
    GET_CLIENT_TOKEN: "/user/transfer-ownership/payment",
    MAKE_PAYMENT: "/user/transfer-ownership/payment",
    PAYMENT_SUCCESS: "/user/transfer-ownership/payment-success",
    REQUEST_DETAIL: "/transfer-ownership-request",
  },
  BRAND: {
    WORKERS: {
      GET_WORKERS: "/brands/workers",
      ADD_WORKER: "/auth/worker",
      GET_UPDATE_WORKER: "/brands/worker",
    },
    COLLECTIONS: {
      GET_COLLECTION: "/brands/collection",
      GET_COLLECTIONS_LISTING: "/brands/collections",
      GET_UPDATE_DEL_COLLECTION: "/brands/collection",
      GET_SUB_COLLECTIONS: "/brands/collection",
      GET_SUB_COLLECTION: "/brands/collection/sub-collection",
      GET_WATCHES: "/brands/collection/sub-collections",
      GET_WATCH_DETAIL: "/watch",
    },
  },
};
