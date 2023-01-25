import express from "express";
import { ImageUploadController } from "../controller/imageupload.controller";
import { fileValidator } from "../util/fileValidation";

class ImageUpload {
  public router: express.Router = express.Router();
  public imageUploadController: ImageUploadController;
  public fileUploadValidator: fileValidator;
  constructor() {
    this.imageUploadController = new ImageUploadController();
    this.fileUploadValidator = new fileValidator();
    this.uploadImageOnS3();
    this.deleteImageOnS3();
  }

  uploadImageOnS3() {
    this.router.post(
      "/upload",
      this.fileUploadValidator.uploadImageValidator().array("file"),
      this.imageUploadController.uploadAttachment
    );
  }
  deleteImageOnS3() {
    this.router.delete("/delete", this.imageUploadController.deleteAttachment);
  }
}

export default new ImageUpload().router;
