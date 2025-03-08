import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Load worker script (needed for PDF rendering)
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Use the locally installed worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "/images/icon/pdf.worker.min.mjs",
  import.meta.url
).toString();


interface PdfViewerModalProps {
  pdfUrl: string;
  onClose: () => void;
}

export function PdfViewerModal({ pdfUrl, onClose }: PdfViewerModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  // Handle keyboard shortcuts for zoom
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "+") setScale((prev) => Math.min(prev + 0.2, 3)); // Max zoom 3x
      if (event.key === "-") setScale((prev) => Math.max(prev - 0.2, 0.5)); // Min zoom 0.5x
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* PDF Viewer */}
        <div className="flex-grow overflow-auto flex justify-center items-center">
          {/* <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={scale} className="shadow-md rounded-lg" />
          </Document> */}
          {/* <div className="overflow-y-auto max-h-[80vh] px-2"> */}
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page key={index} pageNumber={index + 1} scale={scale} className="mb-4 shadow-lg" />
            ))}
          </Document>
        {/* </div> */}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-b-2xl">
          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber <= 1}
              className="bg-purple-600 text-primary px-3 py-1 rounded-md disabled:opacity-50"
            >
              ◀ Prev
            </button>
            <span className="text-sm font-medium">
              Page {pageNumber} of {numPages || "-"}
            </span>
            <button
              onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
              disabled={pageNumber >= (numPages || 1)}
              className="bg-purple-600 text-primary px-3 py-1 rounded-md disabled:opacity-50"
            >
              Next ▶
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
              className="bg-gray-500 text-primary px-3 py-1 rounded-md"
            >
              ➖ Zoom Out
            </button>
            <span className="text-sm font-medium">{(scale * 100).toFixed(0)}%</span>
            <button
              onClick={() => setScale((prev) => Math.min(prev + 0.2, 3))}
              className="bg-gray-500 text-primary px-3 py-1 rounded-md"
            >
              ➕ Zoom In
            </button>
          </div>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download
            className="bg-green-600 text-primary px-4 py-1 rounded-md hover:bg-green-500"
          >
            ⬇ Download
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-primary bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md"
          >
            ✖ Close
          </button>
        </div>
      </div>
    </div>,
    document.body // Render outside parent, directly inside <body>
  );
}



// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { Download, ZoomIn, ZoomOut, X } from "lucide-react";

// // Ensure PDF.js worker is set correctly
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "/images/icon/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// interface PdfViewerModalProps {
//   pdfUrl: string;
//   onClose: () => void;
// }

// export function PdfViewerModal({ pdfUrl, onClose }: PdfViewerModalProps) {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [scale, setScale] = useState(1.0); // Zoom level

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       {/* Modal Content */}
//       <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-lg p-4">
//         {/* Header (Close, Download, Zoom) */}
//         <div className="flex justify-between items-center mb-4">
//           <button onClick={onClose} className="text-gray-600 hover:text-red-500">
//             <X size={24} />
//           </button>

//           <div className="flex gap-2">
//             <button onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))} className="p-2 bg-gray-200 rounded">
//               <ZoomOut size={20} />
//             </button>
//             <button onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))} className="p-2 bg-gray-200 rounded">
//               <ZoomIn size={20} />
//             </button>
//             <a href={pdfUrl} download className="p-2 bg-blue-500 text-white rounded">
//               <Download size={20} />
//             </a>
//           </div>
//         </div>

//         {/* PDF Viewer with Scroll */}
//         <div className="overflow-y-auto max-h-[80vh] px-2">
//           <Document
//             file={pdfUrl}
//             onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//             className="flex flex-col items-center"
//           >
//             {Array.from(new Array(numPages), (_, index) => (
//               <Page key={index} pageNumber={index + 1} scale={scale} className="mb-4 shadow-lg" />
//             ))}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
