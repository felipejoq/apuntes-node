import fs from 'node:fs';

export const saveFile = (path: string, name: string, data: string): boolean => {
  
  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });

  try {
    fs.writeFileSync(`${path}/${name}.txt`, data);   
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}