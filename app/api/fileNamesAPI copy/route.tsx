import fs from 'fs';
import path from 'path';

export async function GET(): Promise<any>{


    const directoryPath = path.join(process.cwd(), '/app/JsonFiles');



  try {
    const files = fs.readdirSync(directoryPath);

    const data = JSON.stringify(files);

    return new Response(data);
  } catch (err) {
    console.error('Unable to scan directory:', err);
    return new Response('Unable to scan directory');
  }
};

