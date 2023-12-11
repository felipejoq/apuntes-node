import { renderHeader } from "./render.header";
import { getMultiplicationGraph } from "./render.table";

export const multiplication = (table: number, limit: number): string => {

  const header = renderHeader(`Tabla del ${table}`);
  const response = getMultiplicationGraph(table, limit);

  return `${header}\n${response}`;
}