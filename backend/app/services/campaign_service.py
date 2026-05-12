from app.schemas.campaign_schema import CampaignRequest, CampaignResponse
from ml.llm_engine.campaign_generator import generate_campaign_content

def create_campaign(request: CampaignRequest) -> CampaignResponse:
    # Convert request to dict for the generator
    data = request.model_dump()
    
    # Generate content
    content = generate_campaign_content(data)
    
    return CampaignResponse(**content)
