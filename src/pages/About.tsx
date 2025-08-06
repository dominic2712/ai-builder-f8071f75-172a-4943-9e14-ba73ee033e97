import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">About AI & Future</h2>
        <p className="text-gray-700">This website is a quick glance into the future with AI. Stay tuned for more updates.</p>
      </main>
    </>
  );
};

export default About;