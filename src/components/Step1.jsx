import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Step1({ data, onChange }) {
  const genders = ['Male', 'Female'];
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        {genders.map((g) => (
          <div
            key={g}
            onClick={() => onChange({ ...data, gender: g })}
            className={`flex-1 p-4 text-center rounded-lg shadow cursor-pointer transition-colors ${
              data.gender === g ? 'bg-red-500 text-white' : 'bg-gray-100'
            }`}
          >
            {g}
          </div>
        ))}
      </div>
      <div>
        <label className="block mb-1">Age</label>
        <input
          type="number"
          value={data.age || ''}
          onChange={(e) => onChange({ ...data, age: e.target.value })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
}
