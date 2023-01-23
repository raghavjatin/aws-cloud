import { Response, Request } from "express";
import { services3 } from "../services/s3";
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
}
