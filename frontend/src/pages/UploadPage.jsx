import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image first.");
      return;
    }

    setError(null);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await axios.post("http://localhost:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      setError("Unable to analyze the crop. Check the backend or file type.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">AgriSense AI Nexus</h1>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full rounded-lg border border-green-200 p-3"
        />

        <button
          onClick={handleUpload}
          className="mt-6 w-full rounded-2xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
        >
          Analyze Crop
        </button>

        {error && <p className="mt-4 text-red-600">{error}</p>}

        {result && (
          <div className="mt-8 rounded-3xl bg-emerald-50 p-6 shadow-inner">
            <h2 className="text-2xl font-semibold text-emerald-900">{result.disease}</h2>
            <p className="mt-3 text-green-800">{result.advice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
