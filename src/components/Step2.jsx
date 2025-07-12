import React from 'react';

export default function Step2({ data, onChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Weight (kg)</label>
        <input
          type="number"
          value={data.weight || ''}
          onChange={(e) => onChange({ ...data, weight: e.target.value })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block mb-1">Height (cm)</label>
        <input
          type="number"
          value={data.height || ''}
          onChange={(e) => onChange({ ...data, height: e.target.value })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}
