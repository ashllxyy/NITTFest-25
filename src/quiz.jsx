import React, { useRef, useState } from "react";

function Quiz() {
  const fileInputRef = useRef(null);
  const [filename, setFilename] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilename(file.name);
    }
  };

  return (
    <div className="app">
      <div className="quiz-content">
        <h2>Submit Your Details</h2>
        <div className="file-upload">
         
          <input
            type="file"
            ref={fileInputRef}
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput" className="custom-file-upload">
            Choose File
          </label>
         
        </div>
        <p>{filename ? filename : 'No file Uploaded'}</p>
        <div className="buttons"><button>Show my ID</button></div>
      </div>
    </div>
  );
}

export default Quiz;
