import express from "express";
import { SendEmailController } from "../controller/sendEmail.controller";

class SendEmail {
  public router: express.Router = express.Router();
  public sendEmailController: SendEmailController;
  constructor() {
    this.sendEmailController = new SendEmailController();
    this.sendEmailOnSES();
  }

  sendEmailOnSES() {
    this.router.post(
      "/format",
      // this.fileUploadValidator.uploadImageValidator().array("file"),
      this.sendEmailController.sendEmail
    );
  }
}

export default new SendEmail().router;
