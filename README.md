# AgriSense AI

A boilerplate project for an agricultural AI platform with a React + Vite frontend, FastAPI backend, and an AI services layer.

## Structure

- frontend/: React + Vite frontend with Tailwind CSS
- backend/: FastAPI backend with prediction, advisory, weather, translation, and forecasting services
- backend/ml/: placeholders for model assets and pipelines

## Run

1. Frontend:
   cd frontend
   npm install
   npm run dev

2. Backend:
   cd backend
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   uvicorn app.main:app --reload
