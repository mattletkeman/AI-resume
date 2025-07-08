import React from 'react';

export default function ResumePreview({ data }) {
  const fontClass = {
    'sans-serif': 'font-sans',
    'serif': 'font-serif',
    'mono': 'font-mono'
  }[data.font] || 'font-sans';

  const borderClass = {
    'none': '',
    'border': 'border border-gray-300',
    'border-2': 'border-2 border-gray-500'
  }[data.border] || '';

  return (
    <div className={`bg-white shadow-md p-6 rounded-md ${fontClass} ${borderClass}`}>
      {/* Contact Info */}
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <h2 className="text-lg text-gray-700">{data.title}</h2>
        {data.location && <p>{data.location}</p>}
        {data.email && <p>{data.email}</p>}
        {data.phone && <p>{data.phone}</p>}
      </div>

      {/* Summary */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Summary</h3>
        <p>{data.summary}</p>
      </div>

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Skills</h3>
          <ul className="list-disc list-inside">
            {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      )}

      {/* Experience */}
      {data.experience && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Experience</h3>
          {data.experience.map((job, idx) => (
            <div key={idx} className="mb-3">
              <h4 className="font-semibold">{job.role} – {job.company}</h4>
              <span className="text-sm text-gray-500">{job.duration}</span>
              <p>{job.details}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Education</h3>
          {data.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree}</strong> – {edu.school}
              <p className="text-sm text-gray-500">{edu.years}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
