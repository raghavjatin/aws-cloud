import multer = require("multer");

export class fileValidator {
  uploadImageValidator() {
    // the file size to be 5 mb
    const limits = { fileSize: 5 * 1024 * 1024 };
    // Accepted formats
    const acceptedExtensions = [
      "jpg",
      "JPG",
      "png",
      "PNG",
      "jpeg",
      "JPEG",
      "docx",
      "DOCX",
      "doc",
      "DOC",
      "xls",
      "XLS",
      "xsls",
      "XSLS",
      "pdf",
      "PDF",
      "CSV",
      "csv",
      "SVG",
      "svg",
      "xlsx",
      "XLSX",
    ];
    const storage = multer.memoryStorage();
    // const fileFilter = (req: any, file: any, cb: any) => {
    //   if (file.mimetype.split("/")[0] === "image") {
    //     cb(null, true);
    //   } else {
    //     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    //   }
    // };

    const fileFilter = async (
      req: any,
      file: { originalname: string },
      cb: any
    ) => {
      if (
        acceptedExtensions.some((ext) => file.originalname.endsWith("." + ext))
      ) {
        return cb(null, true);
      }
      const error = new Error(
        "Invalid Format.Allowed Formats " + acceptedExtensions.join(", ")
      );
      return cb(error);
    };
    const upload = multer({
      storage,
      fileFilter,
      limits,
    });
    return upload;
  }
}
