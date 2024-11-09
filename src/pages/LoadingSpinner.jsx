import React from 'react';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
