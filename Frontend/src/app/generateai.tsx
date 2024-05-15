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

  return (
    <div style={{ width: "100%" }}>
      <iframe
        title="Model Prediction"
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
