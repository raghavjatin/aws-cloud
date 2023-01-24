import { Response, Request } from "express";
import { ServiceSendSESEmail } from "../util/ses-client";

export class SendEmailController {
  private serviceSendSESEmail: ServiceSendSESEmail;

  constructor() {
    this.serviceSendSESEmail = new ServiceSendSESEmail();
  }

  public sendEmail = async (req: Request, res: Response): Promise<void> => {
    const response = await this.serviceSendSESEmail.sendEmail(req.body);
    res.send(response);
  };
}
