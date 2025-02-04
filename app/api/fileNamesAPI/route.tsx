// fetch the data from the blob storage, combine them and return the data to the frontend
// data contain the file name and the folder name and verified data
import { BlobServiceClient } from "@azure/storage-blob";

import { NextApiRequest } from 'next';

export async function POST(request: NextApiRequest) {
  // You need to set up these variables with your values
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("AZURE_STORAGE_CONNECTION_STRING is not defined");
  }
  // jsondata is container name which storage the data by folder

  // const mainContainerName = process.env.DIRECTORY_NAME;
  // if (!mainContainerName) {
  //   throw new Error("DIRECTORY_NAME is not defined");
  // }

  const containerName = "quesnel-ground";
  // const subContainerName = "jsondatamodified";
  try {
    // Create a BlobServiceClient
    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    // Get a container client from the BlobServiceClient
    const containerClient = blobServiceClient.getContainerClient('quesnel-ground'
    );
    // List blobs in the container
    let dataObject = [];
    const directoryPath = "update_jsons/"

    for await (const blob of containerClient.listBlobsFlat({ prefix: directoryPath })) {
      const fullFileName = blob.name;

     
    

      let [folderName, fileName] = fullFileName.split("/");
      dataObject.push(fileName );
      // const extension = fullFileName.split('.').pop();
      // const blobClient = containerClient.getBlobClient(blob.name);

      // Download blob content

      /*   
      const downloadBlockBlobResponse = await blobClient.download();  
      const readableStream = downloadBlockBlobResponse.readableStreamBody;  
      // Convert the readableStream to buffer  
      const stream = new streamBuffers.WritableStreamBuffer();  
      readableStream.pipe(stream);  
      stream.on('finish', () => {  
        // Once the download finishes, read the content as a JSON object  
        const buffer = stream.getContents();  
        try {  
          const jsonObject = JSON.parse(buffer.toString());  
          // Do something with the JSON object  
          console.log(jsonObject);  
        } catch (error) {  
          console.error(`Error parsing JSON from blob: ${blob.name}`, error);  
        }  
      });  
    */
    }

 
    const updatedJsonData = JSON.stringify(dataObject, null, 2);

    // Upload the updated JSON data to the blob

    return new Response(updatedJsonData, { status: 200 });
  } catch (error) {
    console.error("Error reading response:", error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    } else {
      return new Response("An unknown error occurred", { status: 500 });
    }
  }
}
