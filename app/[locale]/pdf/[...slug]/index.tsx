import React from 'react';
import { useParams } from 'react-router-dom';
import PDFViewer from '../../../../components/Pdf';

interface MyPDFPageProps {
  // Add any additional props if needed
}

const MyPDFPage: React.FC<MyPDFPageProps> = () => {
  const { pdfUrl } = useParams<{ pdfUrl: string }>();
  console.log(pdfUrl);

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer url={pdfUrl as string} />
    </div>
  );
};

export default MyPDFPage;