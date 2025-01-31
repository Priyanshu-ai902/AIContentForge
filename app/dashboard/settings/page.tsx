import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="flex items-center justify-center h-full pt-24 bg-slate-950">
      <UserProfile routing="hash" />
    </div>
  );
}

export default Settings;
