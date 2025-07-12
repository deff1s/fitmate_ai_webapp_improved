import React from 'react';

export default function Step3({ data, onChange }) {
  const durations = [
    { label: '1W', value: '1W' },
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
  ];
  const goals = ['Lose Weight', 'Build Muscle', 'Stay Fit'];
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Goal</label>
        <select
          value={data.goal || ''}
          onChange={(e) => onChange({ ...data, goal: e.target.value })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="" disabled>
            Select your goal
          </option>
          {goals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4">
        {durations.map((d) => (
          <div
            key={d.value}
            onClick={() => onChange({ ...data, duration: d.value })}
            className={`flex-1 p-4 text-center rounded-lg shadow cursor-pointer transition-colors ${
              data.duration === d.value ? 'bg-red-500 text-white' : 'bg-gray-100'
            }`}
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
