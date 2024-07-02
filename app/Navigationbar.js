import Link from 'next/link';

const Navigationbar = () => {
  return (
    <nav className="bg-zinc-900 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-end">
        {/* <div className="flex-shrink-0">
          <Link className='no-underline' href="/">
            <p className="text-white font-bold text-xl">Mel</p>
          </Link>
        </div> */}
        <div className="hidden md:flex space-x-4">
          <Link className='no-underline' href="/">
            <p className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Home</p>
          </Link>
          <Link className='no-underline' href="/who">
            <p className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Who am I?</p>
          </Link>
          <Link className='no-underline' href="/skills">
            <p className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Skills</p>
          </Link>
          <Link className='no-underline' href="/education">
            <p className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Education</p>
          </Link>
          <Link className='no-underline' href="/contact">
            <p className="text-gray-300 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Contact me</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
