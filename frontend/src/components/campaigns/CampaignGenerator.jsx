import React, { useState } from 'react';
import { generateCampaign } from '../../services/campaignService';

export default function CampaignGenerator() {
  const [formData, setFormData] = useState({
    crop_type: '',
    region: '',
    weather_conditions: '',
    disease_pressure: '',
    pest_surveillance: '',
    growth_stage: '',
    language: 'English',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await generateCampaign(formData);
      setResult(data);
    } catch (err) {
      setError('Failed to generate campaign. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-50">
        <div className="bg-emerald-700 p-8 text-white">
          <h2 className="text-3xl font-bold">Hyperlocal AI Campaign Generator</h2>
          <p className="mt-2 text-emerald-100">Generate personalized engagement content for farmers at scale.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Crop Type</label>
            <input
              name="crop_type"
              placeholder="e.g. Tomato"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Region</label>
            <input
              name="region"
              placeholder="e.g. Maharashtra"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Weather Conditions</label>
            <input
              name="weather_conditions"
              placeholder="e.g. High humidity"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Disease Pressure</label>
            <input
              name="disease_pressure"
              placeholder="e.g. Fungal outbreak risk"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Pest Surveillance</label>
            <input
              name="pest_surveillance"
              placeholder="e.g. Aphids detected"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Growth Stage</label>
            <input
              name="growth_stage"
              placeholder="e.g. Flowering"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-emerald-900">Language</label>
            <select
              name="language"
              onChange={handleChange}
              className="w-full rounded-xl border-emerald-100 bg-emerald-50/30 p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition"
            >
              <option value="English">English</option>
              <option value="Marathi">Marathi</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl hover:bg-emerald-700 transition transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-200 disabled:opacity-50"
            >
              {loading ? 'Generating Campaigns...' : 'Generate Hyperlocal Campaigns'}
            </button>
          </div>
        </form>

        {error && <div className="mx-8 mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">{error}</div>}

        {result && (
          <div className="p-8 bg-emerald-50/50 border-t border-emerald-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Generated AI Outputs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OutputCard title="SMS Campaign" content={result.sms} icon="📱" />
              <OutputCard title="WhatsApp Advisory" content={result.whatsapp} icon="💬" />
              <OutputCard title="Voice Script" content={result.voice_script} icon="📞" />
              <OutputCard title="Visual Concept" content={result.visual_concept} icon="🖼️" />
              <OutputCard title="Product Awareness" content={result.product_awareness} icon="📦" />
              <OutputCard title="Preventive Alert" content={result.preventive_alert} icon="⚠️" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OutputCard({ title, content, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h4 className="font-bold text-emerald-800">{title}</h4>
      </div>
      <p className="text-emerald-700 text-sm whitespace-pre-wrap">{content}</p>
    </div>
  );
}
