import React from 'react';

export default function EditorPanel({ resumeData, setResumeData }) {
  const updateField = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const updateExperience = (index, key, value) => {
    const updated = [...resumeData.experience];
    updated[index][key] = value;
    setResumeData({ ...resumeData, experience: updated });
  };

  const updateEducation = (index, key, value) => {
    const updated = [...resumeData.education];
    updated[index][key] = value;
    setResumeData({ ...resumeData, education: updated });
  };

  const updateSkill = (index, value) => {
    const updated = [...resumeData.skills];
    updated[index] = value;
    setResumeData({ ...resumeData, skills: updated });
  };

  return (
    <div className="w-full md:w-1/2 p-4 bg-white border-r border-gray-200 overflow-y-auto h-screen">
      <h2 className="text-xl font-bold mb-4">Edit Resume</h2>

      <input type="text" placeholder="Name" value={resumeData.name}
        onChange={(e) => updateField('name', e.target.value)}
        className="mb-2 w-full border p-2 rounded" />

      <input type="text" placeholder="Title" value={resumeData.title}
        onChange={(e) => updateField('title', e.target.value)}
        className="mb-2 w-full border p-2 rounded" />

      <input type="text" placeholder="Location" value={resumeData.location}
        onChange={(e) => updateField('location', e.target.value)}
        className="mb-2 w-full border p-2 rounded" />

      <input type="email" placeholder="Email" value={resumeData.email}
        onChange={(e) => updateField('email', e.target.value)}
        className="mb-2 w-full border p-2 rounded" />

      <input type="text" placeholder="Phone" value={resumeData.phone}
        onChange={(e) => updateField('phone', e.target.value)}
        className="mb-2 w-full border p-2 rounded" />

      <textarea placeholder="Summary" value={resumeData.summary}
        onChange={(e) => updateField('summary', e.target.value)}
        className="mb-4 w-full border p-2 rounded" rows="3" />

      <h3 className="font-semibold mb-1">Skills</h3>
      {resumeData.skills.map((skill, i) => (
        <input key={i} type="text" value={skill}
          onChange={(e) => updateSkill(i, e.target.value)}
          className="mb-2 w-full border p-2 rounded" />
      ))}

      <h3 className="font-semibold mt-4 mb-1">Experience</h3>
      {resumeData.experience.map((job, i) => (
        <div key={i} className="mb-3">
          <input type="text" placeholder="Role" value={job.role}
            onChange={(e) => updateExperience(i, 'role', e.target.value)}
            className="mb-1 w-full border p-2 rounded" />
          <input type="text" placeholder="Company" value={job.company}
            onChange={(e) => updateExperience(i, 'company', e.target.value)}
            className="mb-1 w-full border p-2 rounded" />
          <input type="text" placeholder="Duration" value={job.duration}
            onChange={(e) => updateExperience(i, 'duration', e.target.value)}
            className="mb-1 w-full border p-2 rounded" />
          <textarea placeholder="Details" value={job.details}
            onChange={(e) => updateExperience(i, 'details', e.target.value)}
            className="w-full border p-2 rounded" rows="2" />
        </div>
      ))}

      <h3 className="font-semibold mt-4 mb-1">Education</h3>
      {resumeData.education.map((edu, i) => (
        <div key={i} className="mb-3">
          <input type="text" placeholder="Degree" value={edu.degree}
            onChange={(e) => updateEducation(i, 'degree', e.target.value)}
            className="mb-1 w-full border p-2 rounded" />
          <input type="text" placeholder="School" value={edu.school}
            onChange={(e) => updateEducation(i, 'school', e.target.value)}
            className="mb-1 w-full border p-2 rounded" />
          <input type="text" placeholder="Years" value={edu.years}
            onChange={(e) => updateEducation(i, 'years', e.target.value)}
            className="w-full border p-2 rounded" />
        </div>
      ))}
    </div>
  );
}
