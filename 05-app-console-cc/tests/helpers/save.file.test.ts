import fs from 'node:fs'
import { describe, test, jest, expect, beforeEach } from '@jest/globals';
import { saveFile } from '../../src/helpers'

describe('Pruebas en save.file.test.ts', () => {

  test('Debe retornar false si no se crea el directorio', () => {

    const mkdirMockSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => {
        throw new Error('Error lanzado en el mock de fs.mkdirSync()')
      }
    );

    const result = saveFile('', '', '');

    expect(result).toBe(false);

    mkdirMockSpy.mockRestore();

  });

  test('Debe retornar false si no se crea el archivo', () => {
    
    const writeFileSinckMockSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => {
        throw new Error('Error lanzado en el mock de fs.writeFileSync()')
      }
    );

    const result = saveFile("","","");

    expect(result).toBe(false);
    
    writeFileSinckMockSpy.mockRestore();

  })

});