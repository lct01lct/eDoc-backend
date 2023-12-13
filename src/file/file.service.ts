import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import * as pdfjsLib from 'pdfjs-dist';

@Injectable()
export class FileService {
  async parsePdfFile(file: Express.Multer.File) {
    console.log(pdfjsLib);

    return 1;
  }
}
