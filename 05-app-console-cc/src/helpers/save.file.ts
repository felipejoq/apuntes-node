import fs from 'fs';

export const saveFile = (path: string, name: string, data: string): boolean => {
  
  try {
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
    fs.writeFileSync(`${path}/${name}.txt`, data);   
    return true;
  } catch (error) {
    return false;
  }
}