import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="text-xl font-black text-emerald-900 tracking-tight">AgriSense <span className="text-emerald-600">Nexus</span></span>
        </Link>
        
        <div className="flex gap-8">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/campaigns" active={isActive('/campaigns')}>Campaigns</NavLink>
          <NavLink to="/disease" active={isActive('/disease')}>Disease Detection</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link 
      to={to} 
      className={`text-sm font-bold transition-colors ${
        active ? 'text-emerald-600' : 'text-emerald-900/60 hover:text-emerald-900'
      }`}
    >
      {children}
    </Link>
  );
}
