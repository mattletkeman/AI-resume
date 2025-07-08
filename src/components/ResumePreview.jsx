import React from 'react';

export default function ResumePreview({ data }) {
  return (
    <div className={`bg-white shadow-md p-6 rounded-md font-${data.font} border-${data.border}`}>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <h2 className="text-lg text-gray-700">{data.title}</h2>
      <p className="mt-2">{data.summary}</p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        {data.experience.map((job, idx) => (
          <div key={idx} className="mb-3">
            <h4 className="font-semibold">{job.role} – {job.company}</h4>
            <span className="text-sm text-gray-500">{job.duration}</span>
            <p>{job.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
