import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaDownload } from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const resumeFile = "/img/Burak-Polat.pdf";

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex justify-center mb-2">
        <a
          href={resumeFile}
          download
          className="text-white bg-bondi-400 font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaDownload />
          &nbsp; Download CV
        </a>
      </div>
      <div className="max-w-full p-4">
        <Document
          file={resumeFile}
          className="flex justify-center items-center"
        >
          <Page
            pageNumber={1}
            scale={width > 1024 ? 1.5 : width > 767 ? 1.2 : 0.6}
          />
        </Document>
      </div>
      <div className="flex justify-center mt-2">
        <a
          href={resumeFile}
          download
          className="text-white bg-bondi-400 font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaDownload />
          &nbsp; Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
