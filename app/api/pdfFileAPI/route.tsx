import fs from 'fs/promises';
import path from 'path';

export async function POST(request: any): Promise<any> {
  const { fileName } = await request.json();

  const directoryPath = path.join(process.cwd(), `app/pdfFiles/${fileName}`);

  try {
    const fileContent = await fs.readFile(directoryPath);

    return new Response(fileContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (err) {
    console.error('Unable to read file:', err);
    return new Response('Unable to read file', { status: 500 });
  }
}