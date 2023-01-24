import { Application } from "express";
import elasticRoute from "./elastic.route";
import imageupload from "./imageupload";
import sendEmailRoute from "./sendEmail.route";

export class Routes {
  public routes(app: Application): void {
    // resource and routes mapping comes here
    app.use("/image", imageupload);
    app.use("/email", sendEmailRoute);
    app.use("/elastic", elasticRoute);
  }
}
