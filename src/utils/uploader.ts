import { Request } from "express";
import multer from "multer";
import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const uploader = (
  type: "memoryStorage" | "diskStorage" = "memoryStorage",
  filePrefix: string,
  folderName?: string
) => {
  const defaultDir = path.join(__dirname, "../../public");

  const storage =
    type === "memoryStorage"
      ? multer.memoryStorage()
      : multer.diskStorage({
          destination: (
            req: Request,
            file: Express.Multer.File,
            cb: DestinationCallback
          ) => {
            const destination = folderName
              ? path.join(defaultDir, folderName)
              : defaultDir;
            cb(null, destination);
          },
          filename: (
            req: Request,
            file: Express.Multer.File,
            cb: FileNameCallback
          ) => {
            const originalNameParts = file.originalname.split(".");
            const fileExtension =
              originalNameParts[originalNameParts.length - 1];
            const newFileName = filePrefix + Date.now() + "." + fileExtension;
            cb(null, newFileName);
          },
        });

  const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const allowedMime = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedMime.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg, and .png image files are allowed!"));
    }
  };

  return multer({ storage, fileFilter });
};
