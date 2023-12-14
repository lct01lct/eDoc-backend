import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { BadRequestException } from '@nestjs/common';

export const FileInterceptorMulterOptions: MulterOptions = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const rootPath = path.join(
        __dirname,
        '../../public/room',
        req.headers['room-id'] as string,
      );

      if (!fs.existsSync(rootPath)) fs.mkdirSync(rootPath);

      cb(null, rootPath);
    },
    filename: (_, file, cb) => {
      const originalname = Buffer.from(file.originalname, 'latin1').toString(
        'utf8',
      );
      const fileName = originalname.substring(0, originalname.lastIndexOf('.'));

      cb(null, `${fileName}_${Date.now()}.pdf`);
    },
  }),
  fileFilter: (_, file, cb) => {
    const isPdf = file.mimetype === 'application/pdf';
    console.log(file.mimetype);
    if (!isPdf) {
      return cb(new BadRequestException('文件格式错误'), false);
    }

    return cb(null, true);
  },
};
