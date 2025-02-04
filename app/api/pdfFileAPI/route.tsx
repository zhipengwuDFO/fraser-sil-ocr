// fetch the data from the blob storage, combine them and return the data to the frontend
// data contain the file name and the folder name and verified data
import { BlobServiceClient } from "@azure/storage-blob";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // You need to set up these variables with your values

  const { fileName } = await request.json();
console.log(fileName);
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("AZURE_STORAGE_CONNECTION_STRING is not defined");
  }

  const containerName = "quesnel-ground";
  const bolbName = "pdf";

  try {
    // Create a BlobServiceClient
    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);
    // Get a container client from the BlobServiceClient
    const containerClient = blobServiceClient.getContainerClient(
      `${containerName}/${bolbName}`
    );

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const blobExists = await blockBlobClient.exists();

    if (blobExists) {
        
      //   // Blob exists, fetch its content
      // Download the PDF blob content
      const response = await blockBlobClient.downloadToBuffer();
      //   console.log("response", response);

      // Parse the PDF content
      return new Response(response, { status: 200 });
    } else {
      throw new Error("Blob does not exist");
    }
  } catch (error) {
    console.error("Error reading response:", error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    } else {
      return new Response("An unknown error occurred", { status: 500 });
    }
  }
}
