import AWS from "aws-sdk";
import { emailFormate } from "../type/email.type";
import awsConfig from "../config/config";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  AWS_SES_API_VERSION,
} from "../config/secret";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

export class ServiceSendSESEmail {
  public async sendEmail(data: emailFormate): Promise<any> {
    const ses = new AWS.SES({ apiVersion: AWS_SES_API_VERSION });
    const params = {
      Destination: {
        ToAddresses: [data.to],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: data.message,
          },
          /* replace the Html attribute with the following if you want to send plain text emails.
                    Text: {
                        Charset: "UTF-8",
                        Data: message
                    }
                 */
        },
        Subject: {
          Charset: "UTF-8",
          Data: data.subject,
        },
      },
      ReturnPath: data.from ? data.from : awsConfig.aws.ses.from.default,
      Source: data.from ? data.from : awsConfig.aws.ses.from.default,
    };

    ses.sendEmail(params, (err, data) => {
      if (err) {
        return err;
      } else {
        return data;
      }
    });
  }
}
