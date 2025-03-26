// components/FullWidthSection.tsx
'use client';

import React from 'react';

export default function FullWidthSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-screen relative left-1/2 -translate-x-1/2 ${className}`}>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}