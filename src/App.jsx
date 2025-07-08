import React, { useState } from 'react';
import EditorPanel from './components/EditorPanel';
import ResumePreview from './components/ResumePreview';
import Toolbar from './components/Toolbar';

export default function App() {
  const [resumeData, setResumeData] = useState({
    name: 'John Doe',
    title: 'Software Engineer',
    summary: 'Passionate developer with 5+ years of experience.',
    experience: [
      {
        role: 'Frontend Developer',
        company: 'TechCorp',
        duration: '2020 - Present',
        details: 'Built scalable interfaces using React and Tailwind CSS.',
      },
    ],
    font: 'sans-serif',
    border: 'none',
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <EditorPanel resumeData={resumeData} setResumeData={setResumeData} />
      <div className="flex-1 bg-gray-100 p-4">
        <Toolbar resumeData={resumeData} setResumeData={setResumeData} />
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}
