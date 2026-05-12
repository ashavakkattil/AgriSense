import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-12">
        <header className="space-y-4">
          <h1 className="text-7xl font-black text-emerald-900 leading-tight">AgriSense <span className="text-emerald-600">Nexus</span></h1>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            The next-generation agricultural intelligence platform for hyper-personalized farmer engagement and disease surveillance.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/campaigns" className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 hover:border-emerald-500 transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-2xl font-bold text-emerald-900 group-hover:text-emerald-600 transition">Campaign Generator</h2>
              <p className="mt-3 text-emerald-700">Generate hyperlocal AI campaigns for SMS, WhatsApp, and Voice at scale.</p>
            </div>
          </Link>

          <Link to="/disease" className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 hover:border-emerald-500 transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🔬</div>
              <h2 className="text-2xl font-bold text-emerald-900 group-hover:text-emerald-600 transition">Disease Detection</h2>
              <p className="mt-3 text-emerald-700">AI-powered crop disease analysis and preventive agronomic advisories.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
