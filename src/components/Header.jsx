import React from 'react';

export default function Header({ step }) {
  const progress = (step / 4) * 100;
  return (
    <header className="bg-gradient-to-r from-[#E10600] to-[#FF5E5E] text-white p-4">
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 bg-white rounded-full mr-2" />
        <h1 className="flex-1 text-center font-bold">FitMate AI</h1>
        <div className="w-8" />
      </div>
      <div className="mt-2 h-1 bg-gray-200 rounded">
        <div
          className="h-1 bg-white rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xs text-center mt-1">Step {step} of 4</div>
    </header>
  );
}
