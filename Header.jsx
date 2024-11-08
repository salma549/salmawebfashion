import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full py-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Navigation links on the right */}
        <div className="flex space-x-8">
          <Link to="/women" className="text-white text-lg hover:text-gray-400">Women</Link>
          <Link to="/men" className="text-white text-lg hover:text-gray-400">Men</Link>
          <Link to="/signup" className="text-white text-lg hover:text-gray-400">Signup</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
