import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

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
}
