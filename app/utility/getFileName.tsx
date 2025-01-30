const getFileNames = async (): Promise<any> => {


    let jsonData;

    let response = await fetch("/api/fileNamesAPI", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
 
    });
  
    if (!response.ok) {
      console.error("Failed to fetch");
      return; // or throw an error if you prefer to handle it upstream
    } else if (response.ok && response.body) {
      const reader = response.body.getReader();
      let jsonString = "";
  
      // Read the response stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Process the entire JSON when the stream is complete
          jsonData = JSON.parse(jsonString);
          break;
        }
        // Concatenate the chunks into a single string
        jsonString += new TextDecoder().decode(value);
      }
  
      // Release the reader's lock when done
      reader.releaseLock();
  
      return jsonData; // Return the processed JSON data
    }
  };
  
  export default getFileNames;
  