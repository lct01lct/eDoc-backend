import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class FileService {
  async parsePdfFile(file: Express.Multer.File) {
    const pdfjsLib = await import('pdfjs-dist');
    console.log(pdfjsLib);

    return 1;
  }
}
