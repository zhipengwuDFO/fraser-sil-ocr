import fs from 'fs/promises';
import path from 'path';

export async function POST(request: any): Promise<any> {
  const { fileName } = await request.json();

    const directoryPath = path.join(process.cwd(), `/app/JsonFiles/${fileName}`);
    console.log(directoryPath);


  try {
    const files = await fs.readFile(directoryPath);
 

    const fileContent = await fs.readFile(directoryPath, 'utf-8');
    return new Response(fileContent, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Unable to scan directory:', err);
    return new Response('Unable to scan directory');
  }
};

