import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const {
  ENVIRONMENT,
  AWS_BUCKET_NAME,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_SES_API_VERSION,
  AWS_DEFAULT_EMAIL,
} = process.env;
