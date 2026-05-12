import React from 'react';
import CampaignGenerator from '../components/campaigns/CampaignGenerator';

export default function Campaigns() {
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black text-emerald-900 tracking-tight">Campaign Center</h1>
          <p className="mt-4 text-emerald-700 text-lg max-w-2xl mx-auto">
            Leverage hyperlocal data to generate high-engagement campaigns that speak directly to the farmer's current reality.
          </p>
        </header>
        
        <CampaignGenerator />
      </div>
    </div>
  );
}
