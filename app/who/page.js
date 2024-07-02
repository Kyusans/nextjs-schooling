import React from 'react';

function Page() {
  return (
    <div className='min-h-screen w-full text-white'>
      <div className=' mx-auto px-4 py-12 bg-zinc-950 w-full text-center'>
        <h1 className='text-3xl font-bold mb-6'>Who am I?</h1>
        <p className='text-lg leading-relaxed'>
          I&apos;m a passionate programmer with a keen interest in web development and mobile apps. 
          I love building applications that solve real-world problems and enjoy learning new 
          technologies to expand my skill set.
        </p>
        <p className='mt-4'>
          Currently, I&apos;m working on a project using React and exploring Next.js for server-side 
          rendering. I also have experience with backend technologies like Node.js and MongoDB.
        </p>
        <p className='mt-4'>
          Outside of coding, I enjoy playing video games, reading novels, and playing the guitar.
        </p>
      </div>
    </div>
  );
}

export default Page;
