import React from 'react';

export default function Toolbar({ resumeData, setResumeData }) {
  const handleChange = (key, value) => {
    setResumeData({ ...resumeData, [key]: value });
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Font</label>
        <select
          value={resumeData.font}
          onChange={(e) => handleChange('font', e.target.value)}
          className="border p-1 rounded"
        >
          <option value="sans-serif">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Border</label>
        <select
          value={resumeData.border}
          onChange={(e) => handleChange('border', e.target.value)}
          className="border p-1 rounded"
        >
          <option value="none">None</option>
          <option value="border">Thin</option>
          <option value="border-2">Thick</option>
        </select>
      </div>
    </div>
  );
}
