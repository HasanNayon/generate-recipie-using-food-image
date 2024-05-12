"use client";

import React, { useState } from "react";

function GenerateAi() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8501", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Here is maal: ", data.prediction);
      // setPrediction(data.prediction);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <iframe
        title="External Site"
        src="http://localhost:8501/"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default GenerateAi;
