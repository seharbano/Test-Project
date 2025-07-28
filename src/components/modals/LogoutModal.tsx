import React from "react";
import GlobalModal from "./GlobalModal";

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onCancel}
      // title="Logout Confirmation"
      modalHeader={false}

    >
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-lg font-medium text-gray-800">Are you sure you want to logout?</p>
        <div className="flex gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </GlobalModal>
  );
};

export default LogoutModal; 