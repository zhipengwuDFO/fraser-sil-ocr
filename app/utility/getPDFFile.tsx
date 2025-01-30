const getPDFFile = async (fileName: string): Promise<Blob | null> => {
  try {
    const response = await fetch("/api/pdfFileAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileName }),
    });

    if (!response.ok) {
      console.error("Failed to fetch");
      return null;
    }

    const blob = await response.blob();

    return blob;
  } catch (error) {
    console.error("Error fetching PDF file:", error);
    return null;
  }
};

export default getPDFFile;