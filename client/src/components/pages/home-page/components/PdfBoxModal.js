import React from "react";

export default function PdfBoxModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 rounded">
      <div className="bg-white rounded-lg p-8 rounded-2xl">
        <h2 className="text-l mb-4 font-bold">Select document here to start.</h2>
        <button onClick={onClose} className="bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
      </div>
    </div>
  );
}
