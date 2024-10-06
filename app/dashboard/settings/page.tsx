import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="flex items-center justify-center h-full">
      <UserProfile routing="hash" />
    </div>
  );
}

export default Settings;
