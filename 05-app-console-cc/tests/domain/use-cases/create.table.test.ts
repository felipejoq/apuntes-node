import { describe, test, expect } from '@jest/globals';
import { CreateTable } from '../../../src/domain/use-cases/create.table'



describe('Pruebas en CreateTable', () => {
  test('Debería crear la tabla con valores indicados', () => {

    const table = 1;
    const limit = 10;
    const createTable = new CreateTable();

    const result = createTable.execute({table, limit});
    const rows = result.split('\n').length;    
  
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(result).toContain(`Tabla del ${table}`);
    expect(result).toContain(`→ ${table} x 1 = 1`);
    expect(result).toContain(`→ 1 x ${limit} = ${table * limit}`);
    expect(rows).toBe(limit + 4);
  })
})