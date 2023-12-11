export const getMultiplicationGraph = (table: number, limit: number) => {
  let response = '';

  for (let i = 1; i <= limit; i++) {
    response += `→ ${table} x ${i} = ${table * i}\n`;
  }
  
  return response;
}