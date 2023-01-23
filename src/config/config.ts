import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from "../config/secret";

const awsConfig = {
  aws: {
    key: AWS_ACCESS_KEY_ID,
    secret: AWS_SECRET_ACCESS_KEY,
    ses: {
      from: {
        // replace with an actual email address
        default: "raghavjatin123@gmail.com",
      },
      // e.g. us-west-2
      region: AWS_REGION,
    },
  },
};

export default awsConfig;
