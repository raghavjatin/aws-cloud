import { Response, Request } from "express";
import { services3 } from "../util/awsS3.service";

export class ImageUploadController {
  private s3Service: services3;

  constructor() {
    this.s3Service = new services3(); // Create a new instance of PostController
  }

  public uploadAttachment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const response = await this.s3Service.uploadAttachment(req.files);
    res.send(response);
  };
  public deleteAttachment = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const {
      body: { fileNames },
    } = req;
    const response = await this.s3Service.deleteAttachment(fileNames);
    res.send(response);
  };
}
