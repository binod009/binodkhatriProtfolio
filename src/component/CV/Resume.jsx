import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
const Resume = () => {
  return (
    <div>
      <h2>binod khatri CV</h2>
      <PDFViewer
        document={{
          url: "./assets/images/binodkhatriCV.pdf",
        }}
      />
    </div>
  );
};

export default Resume;
