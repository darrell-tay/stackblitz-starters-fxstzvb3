import Modal from '../ui/Modal';
import PDFViewer from './PDFViewer';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: File;
}

export default function PDFPreviewModal({ isOpen, onClose, file }: PDFPreviewModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={file.name}
      size="lg"
    >
      <div className="p-4">
        <PDFViewer file={file} onClose={onClose} />
      </div>
    </Modal>
  );
}