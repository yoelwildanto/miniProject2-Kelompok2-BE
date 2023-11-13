import path from 'path';
import multer from "multer";
import { Request, Response } from 'express';

const productStorage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      cb(null, path.join(__dirname, '../public/images/product'));
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      cb(null, `product_user-${Date.now()}-${file.originalname}`);
    },
});

const categoryStorage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, path.join(__dirname, '../public/images/category'));
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `category_product-${Date.now()}-${file.originalname}`);
  },
});

  const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
    const fileType = file.mimetype.split('/')[1];
    if (
      fileType === 'png' ||
      fileType === 'jpg' ||
      fileType === 'jpeg' ||
      fileType === 'gif'
    ) {
      cb(null, true);
    } else {
      cb('File type not allowed', false);
    }
  };

  const limits = {
    fileSize: 5120 * 5120,
  };

  const uploadProductFile = multer({
    storage: productStorage,
    fileFilter,
    limits,
  }).single('image');

  const uploadCategoryFile = multer({
    storage: categoryStorage,
    fileFilter,
    limits,
  }).single('image');

  

  export = {
    uploadProductFile,
    uploadCategoryFile
  }