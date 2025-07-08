import React from 'react';

export default function Toolbar({ resumeData, setResumeData }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={resumeData.font}
        onChange={(e) => setResumeData({ ...resumeData, font: e.target.value })}
        className="p-2 border"
      >
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Monospace</option>
      </select>

      <select
        value={resumeData.border}
        onChange={(e) => setResumeData({ ...resumeData, border: e.target.value })}
        className="p-2 border"
      >
        <option value="none">No Border</option>
        <option value="border">Border</option>
        <option value="border-2">Thick Border</option>
      </select>
    </div>
  );
}
