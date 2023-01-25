import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET_NAME,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  AWS_SES_API_VERSION,
} from "../config/secret";

export class services3 {
  public async uploadAttachment(files: any): Promise<any> {
    const s3 = new S3();

    const params = files.map((file: any) => {
      return {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `sg-demo/${uuidv4()}-${file.originalname}`,
        Body: file.buffer,
      };
    });
    return await Promise.all(
      params.map((param: any) => s3.upload(param).promise())
    );
  }

  public async deleteAttachment(deleteObject: string[]): Promise<any> {
    try {
      const s3 = new S3({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        apiVersion: AWS_SES_API_VERSION,
        region: AWS_REGION,
      });

      const keys = deleteObject.map((file) => {
        return { Key: file };
      });
      const params: S3.Types.DeleteObjectsRequest = {
        Bucket: String(AWS_BUCKET_NAME),
        Delete: {
          Objects: keys,
        },
      };
      return s3.deleteObjects(params).promise();
    } catch (err) {
      return err;
    }
  }
}
