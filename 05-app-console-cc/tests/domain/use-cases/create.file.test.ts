import fs from 'fs';
import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { CreateFile } from '../../../src/domain/use-cases/create.file';


describe('Pruebas en create.file.ts', () => {

  // beforeEach(() => {
  //   // Clean folder test oputs
  //   fs.rmSync('./outputs/test', { recursive: true });
  // })

  afterEach(() => {
    // Clean folder test oputs
    fs.rmSync('./outputs/test', { recursive: true });
  })

  test('Debe retornar true y verificar si existe el archivo creado', () => {
    const options = {
      path: './outputs/test',
      name: 'tabla_test',
      data: 'hello_world_test'
    }
    const filePath = `${options.path}/${options.name}.txt`;

    const createFile = new CreateFile();
    const wasCreated = createFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(wasCreated).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toContain(options.data);

  });
});