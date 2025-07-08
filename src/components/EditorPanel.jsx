import React from 'react';

export default function EditorPanel({ resumeData, setResumeData }) {
  const handleChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const handleExperienceChange = (index, key, value) => {
    const newExperience = [...resumeData.experience];
    newExperience[index][key] = value;
    setResumeData({ ...resumeData, experience: newExperience });
  };

  return (
    <div className="w-full md:w-1/3 bg-white p-4 border-r">
      <h2 className="text-lg font-semibold mb-2">Resume Editor</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={resumeData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        className="w-full mb-2 p-2 border"
      />

      <input
        type="text"
        placeholder="Title"
        value={resumeData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        className="w-full mb-2 p-2 border"
      />

      <textarea
        placeholder="Summary"
        value={resumeData.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
        className="w-full mb-4 p-2 border"
      />

      <h3 className="font-semibold">Experience</h3>
      {resumeData.experience.map((job, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Role"
            value={job.role}
            onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
            className="w-full mb-1 p-2 border"
          />
          <input
            type="text"
            placeholder="Company"
            value={job.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            className="w-full mb-1 p-2 border"
          />
          <input
            type="text"
            placeholder="Duration"
            value={job.duration}
            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
            className="w-full mb-1 p-2 border"
          />
          <textarea
            placeholder="Details"
            value={job.details}
            onChange={(e) => handleExperienceChange(index, 'details', e.target.value)}
            className="w-full p-2 border"
          />
        </div>
      ))}
    </div>
  );
}
