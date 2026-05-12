from fastapi import APIRouter, HTTPException
from app.schemas.campaign_schema import CampaignRequest, CampaignResponse
from app.services.campaign_service import create_campaign

router = APIRouter(prefix="/campaign", tags=["Campaigns"])

@router.post("/generate", response_model=CampaignResponse)
async def generate_campaign(request: CampaignRequest):
    try:
        return create_campaign(request)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
