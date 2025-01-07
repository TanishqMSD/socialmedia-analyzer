import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { Instagram, ExternalLink } from 'lucide-react';

Modal.setAppElement('#root');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = {
    username: "hackhorizon.ai",
    name: "Hack Horizon",
    instagramHandle: "@hackhorizon.ai",
    instagramUrl: "https://instagram.com/hackhorizon"
  };

  // NavLink style function to handle active state
  const getLinkStyle = ({ isActive }) => {
    return isActive 
      ? "text-blue-500" 
      : "text-white hover:text-blue-500 transition-colors";
  };

  return (
    <>
      <nav className="bg-[#0f0f11] text-white flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Influence <sup className='p-[0.5px]'>IQ</sup></div>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={getLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/analytics" className={getLinkStyle}>Analytics</NavLink></li>
          <li><NavLink to="/insights" className={getLinkStyle}>Insights</NavLink></li>
          <li><NavLink to="/about" className={getLinkStyle}>About</NavLink></li>
        </ul>
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded text-white"
        >
          Account
        </button>
      </nav>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-80 shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <div className="pt-4 space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                {userData.username[0].toUpperCase()}
              </div>
              <h2 className="text-xl font-semibold">{userData.username}</h2>
              <p className="text-gray-600">{userData.name}</p>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Instagram size={20} className="text-gray-600" />
                <span className="text-gray-800">{userData.instagramHandle}</span>
              </div>
              <a 
                href={userData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;