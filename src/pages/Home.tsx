import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to the Future of AI</h2>
        <p className="text-gray-700">Explore the exciting advancements in artificial intelligence and how it will shape our future.</p>
      </main>
    </>
  );
};

export default Home;