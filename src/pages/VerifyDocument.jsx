import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Fuse from "fuse.js";
import ExtractedTextView from "../components/ExtractedTextView";
// import "./VerifyDocument.css";

const VerifyDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [verificationResult, setVerificationResult] = useState("");
  const [rawExtractedText, setRawExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  // Database
  const databaseRecords = [
    {
      name: "Himanshu Chaudhari",
      course: "Computer Science and Engineering",
      year: "2022",
      roll: "12345",
    },
  ];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setVerificationResult("");
    setRawExtractedText("");
  };

  const normalizeText = (text) => {
    return text
      .replace(/\n/g, " ") // Replace newlines with spaces
      .replace(/[^a-zA-Z0-9\s]/g, " ") // Remove special characters but keep spaces
      .replace(/\s+/g, " ") // Collapse multiple spaces
      .trim()
      .toLowerCase();
  };

  const handleVerification = async () => {
    if (!selectedFile) {
      setVerificationResult("Please upload a document first.");
      return;
    }

    setLoading(true);

    try {
      const { data: { text } } = await Tesseract.recognize(selectedFile, "eng");
      console.log("Extracted Text:", text);
      
      // Keep the original text for display
      setRawExtractedText(text);
      
      const normalizedText = normalizeText(text);
      console.log("Normalized Text:", normalizedText);

      // Create a Fuse instance with all database records
      const fuseOptions = {
        keys: ["name", "course", "year", "roll"],
        threshold: 0.4,
        includeScore: true
      };
      
      const fuse = new Fuse(databaseRecords, fuseOptions);
      const results = fuse.search(normalizedText);
      
      console.log("Fuse.js results:", results);

      if (results.length > 0 && results[0].score < 0.5) {
        // Good match found
        const matchedRecord = results[0].item;
        setVerificationResult(
          `✅ Document Verified Successfully!\n\nStudent: ${matchedRecord.name}\nCourse: ${matchedRecord.course}\nYear: ${matchedRecord.year}\nRoll: ${matchedRecord.roll}`
        );
      } else {
        // No good match found, try individual field matching
        const nameMatch = normalizedText.includes(databaseRecords[0].name.toLowerCase());
        const courseMatch = normalizedText.includes("computer science");
        const yearMatch = normalizedText.includes(databaseRecords[0].year);
        const rollMatch = normalizedText.includes(databaseRecords[0].roll);
        
        console.log("Individual matches:", {nameMatch, courseMatch, yearMatch, rollMatch});
        
        if (nameMatch && courseMatch && yearMatch && rollMatch) {
          setVerificationResult(
            `✅ Document Verified Successfully!\n\nStudent: ${databaseRecords[0].name}\nCourse: ${databaseRecords[0].course}\nYear: ${databaseRecords[0].year}\nRoll: ${databaseRecords[0].roll}`
          );
        } else {
          setVerificationResult(
            `❌ Document Verification Failed\n\nDocument: ${selectedFile.name}\n\nResult: This document does not match our records.\n\nDetected: ${nameMatch ? "Name ✓" : "Name ✗"}, ${courseMatch ? "Course ✓" : "Course ✗"}, ${yearMatch ? "Year ✓" : "Year ✗"}, ${rollMatch ? "Roll ✓" : "Roll ✗"}`
          );
        }
      }
    } catch (err) {
      console.error("OCR Error:", err);
      setVerificationResult("❌ Error processing the document.");
    }

    setLoading(false);
  };

  return (
    <div className="verify-container">
      <h2>Document Verification</h2>
      <p className="upload-instruction">Upload a certificate or academic document to verify its authenticity</p>
      
      <div className="file-upload-container">
        <input 
          type="file" 
          id="file-upload" 
          accept="image/*,.pdf" 
          onChange={handleFileChange} 
          className="file-input"
        />
        <label htmlFor="file-upload" className="file-upload-label">
          <span className="upload-icon">📁</span>
          <span className="upload-text">
            {selectedFile ? selectedFile.name : 'Choose File'}
          </span>
        </label>
      </div>

      <div className="supported-formats">
        <p>Currently Supports PNG Format Only (Max 10MB)</p>
      </div>

      <button 
        onClick={handleVerification} 
        disabled={!selectedFile || loading}
        className="verify-button"
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Verifying...
          </>
        ) : (
          'Verify Document'
        )}
      </button>

      {verificationResult && (
        <div className={`result-box ${verificationResult.includes('✅') ? 'success' : 'error'}`}>
          <pre>{verificationResult}</pre>
        </div>
      )}

      {rawExtractedText && <ExtractedTextView text={rawExtractedText} />}
    </div>
  );
};

export default VerifyDocument;