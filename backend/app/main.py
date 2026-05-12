from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.disease_routes import router as disease_router
from app.routes.campaign_routes import router as campaign_router

app = FastAPI(
    title="AgriSense AI Backend",
    description="FastAPI backend for crop disease prediction and advisory services.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(disease_router)
app.include_router(campaign_router)
