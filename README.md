# AgriSense Nexus

AgriSense Nexus is a comprehensive agricultural intelligence platform designed to empower farmers and agribusinesses with AI-driven insights. This repository contains the full stack architecture, including a React-based frontend, a FastAPI backend, and a specialized AI/ML layer for disease detection, campaign management, and market forecasting.

## Repository Structure

- **frontend/**: React + Vite application with a modular component-based architecture.
- **backend/**: FastAPI application providing core services and API routes.
- **backend/ml/**: AI/ML pipelines for disease detection, pest surveillance, and predictive analytics.
- **datasets/**: Repository for training and inference datasets.
- **notebooks/**: Jupyter notebooks for research and development.
- **docs/**: Comprehensive documentation for architecture, API, and setup.
- **deployment/**: Configuration files for various deployment platforms (Docker, Vercel, Render).

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

