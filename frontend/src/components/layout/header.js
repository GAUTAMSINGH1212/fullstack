import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/home" className="text-white hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
