import { saveFile } from "../../helpers";

export interface SaveFileUseCae {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  path: string;
  name: string;
  data: string;
}

export class CreateFile implements SaveFileUseCae {
  constructor() { }
  execute({ path, name, data }: SaveFileOptions) {
    return saveFile(path, name, data);
  }
}