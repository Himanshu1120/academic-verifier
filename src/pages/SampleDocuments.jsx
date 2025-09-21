// pages/SampleDocuments.jsx
import React from 'react';

const SampleDocuments = () => {
  // Sample documents with PNG file paths
  const documents = [
    {
      id: 1,
      title: 'Fake Document',
      description: 'Use this sample to test how our system detects forged certificates',
      type: 'fake',
      downloadLink: process.env.PUBLIC_URL + '/documents/fake-document.png',
      fileName: 'fake-document.png'
    },
    {
      id: 2,
      title: 'Original Certificate',
      description: 'A valid certificate that will pass our verification process',
      type: 'original',
      downloadLink: process.env.PUBLIC_URL + '/documents/original-certificate.png',
      fileName: 'original-certificate.png'
    }
  ];

  const handleDownload = (link, filename) => {
    // Create a temporary anchor element to trigger download
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="sample-docs-container">
      <div className="sample-docs-header">
        <h1>Sample Documents</h1>
        <p>Download these sample documents to test our verification system</p>
      </div>

      <div className="docs-grid">
        {documents.map(doc => (
          <div key={doc.id} className={`doc-card ${doc.type}`}>
            <div className="doc-icon">
              {doc.type === 'fake' ? '❌' : '✅'}
            </div>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            <button 
              onClick={() => handleDownload(doc.downloadLink, doc.fileName)}
              className={`download-btn ${doc.type === 'fake' ? 'fake-btn' : 'original-btn'}`}
            >
              Download {doc.type === 'fake' ? 'Fake' : 'Original'} Document
            </button>
          </div>
        ))}
      </div>

      <div className="instructions-section">
        <h2>How to Test Our System</h2>
        <ol>
          <li>Download both sample documents</li>
          <li>Go to the <a href="/verify-document">Verify Document</a> page</li>
          <li>Upload each document separately</li>
          <li>See how our system correctly identifies the authentic and fake documents</li>
        </ol>
      </div>
    </div>
  );
};

export default SampleDocuments;