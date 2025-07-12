import React from 'react';

function FileInput({ label, name, file, onChange }) {
  const preview = file ? URL.createObjectURL(file) : null;
  return (
    <div className="space-y-2">
      <label>{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e.target.files[0])}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
      />
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-24 h-24 object-cover rounded-full mx-auto"
        />
      )}
    </div>
  );
}

export default function Step4({ data, onChange }) {
  return (
    <div className="space-y-4">
      <FileInput
        label="Current photo"
        name="currentPhoto"
        file={data.currentPhoto}
        onChange={(file) => onChange({ ...data, currentPhoto: file })}
      />
      <FileInput
        label="Goal photo (optional)"
        name="goalPhoto"
        file={data.goalPhoto}
        onChange={(file) => onChange({ ...data, goalPhoto: file })}
      />
    </div>
  );
}
