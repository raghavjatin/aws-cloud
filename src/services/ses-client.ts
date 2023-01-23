import AWS from "aws-sdk";
import { emailFormate } from "../type/email.type";
import awsConfig from "../config/config";
import { AWS_SES_API_VERSION } from "../config/secret";

AWS.config.update({
  accessKeyId: awsConfig.aws.key,
  secretAccessKey: awsConfig.aws.secret,
  region: awsConfig.aws.ses.region,
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
        return console.log(err, err.stack);
      } else {
        console.log("Email sent.", data);
      }
    });
  }
}
