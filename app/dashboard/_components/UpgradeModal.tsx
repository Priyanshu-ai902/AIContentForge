import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h3 className="text-xl mb-4">Upgrade Your Plan</h3>
        <p className="mb-4">You have used all your 13000 credits. Please upgrade to continue.</p>
        <Link href={'/dashboard/billing'}>
          <Button onClick={onClose} className="w-full bg-blue-500 hover:bg-blue-600">Upgrade Now</Button>
        </Link>

      </div>
    </div>
  );
};

export default UpgradeModal;
