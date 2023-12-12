import { describe, test, expect } from '@jest/globals';

// import { yarg } from '../../src/plugins'

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('../../src/plugins');
  return yarg;
}

describe('Test en archivo args.plugins.ts', () => {

  test('Prueba con los valores por defecto.', async () => {

    // const args = { t: table, l: limit, s: showTable, n: name, p: path }

    const yarg = await runCommand(['-t', '1', 'l', '10', '-s', 'true']);

    expect(yarg).toEqual(expect.objectContaining({
      t: 1,
      l: 10,
      s: true,
      n: 'table_1',
      p: './outputs/tables'
    }));
  })

})

