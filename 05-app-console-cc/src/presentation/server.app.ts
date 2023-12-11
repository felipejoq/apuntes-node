import { CreateFile } from "../domain/use-cases/create.file";
import { CreateTable } from "../domain/use-cases/create.table";

interface RunOptions {
  table: number,
  limit: number,
  showTable: boolean,
  name: string,
  path: string,
}

export class ServerApp {
  static run({ table, limit, showTable, name, path }: RunOptions) {

    const result = new CreateTable()
      .execute({ table, limit });

    if (showTable) console.log(`${result}`);

    const wasCreated = new CreateFile()
      .execute({ path, name, data: result });

    (wasCreated)
      ? console.log('◉ Archivo guardado con éxito!')
      : console.log('✘ Archivo no guardado!');
  }
}