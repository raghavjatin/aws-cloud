import { Application } from "express";
import imageupload from "./imageupload";
import sendEmailRoute from "./sendEmail.route";

export class Routes {
  public routes(app: Application): void {
    // resource and routes mapping comes here
    app.use("/image", imageupload);
    app.use("/email", sendEmailRoute);
  }
}
