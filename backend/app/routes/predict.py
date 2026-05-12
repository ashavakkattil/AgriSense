from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.disease_service import predict_disease
from app.services.advisory_service import generate_advice
from app.services.weather_service import get_weather
from app.services.translation_service import translate_text
from app.services.forecast_service import forecast_market

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        disease = predict_disease(file.file)
        advice = generate_advice(disease)
        return {
            "disease": disease,
            "advice": advice,
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))

@router.get("/weather")
async def weather(city: str):
    return get_weather(city)

@router.get("/translate")
async def translate(text: str, target_language: str = "hi"):
    return translate_text(text, target_language)

@router.get("/forecast")
async def forecast(ticker: str = "CORN"):
    return forecast_market(ticker)
