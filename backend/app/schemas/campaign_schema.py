from pydantic import BaseModel
from typing import Optional, List

class CampaignRequest(BaseModel):
    crop_type: str
    region: str
    weather_conditions: str
    disease_pressure: str
    pest_surveillance: str
    growth_stage: str
    language: str = "English"
    historical_engagement: Optional[str] = None

class CampaignResponse(BaseModel):
    sms: str
    whatsapp: str
    voice_script: str
    visual_concept: str
    product_awareness: str
    preventive_alert: str
