import os

def generate_campaign_content(data: dict):
    # This would normally call an LLM (e.g., GPT-4 or Gemini)
    # Mocking the output based on the user's example
    
    crop = data.get("crop_type", "Crop")
    region = data.get("region", "Region")
    weather = data.get("weather_conditions", "Weather")
    lang = data.get("language", "English")
    
    # Simple logic for the example provided
    if "Maharashtra" in region and "Tomato" in crop and "Marathi" in lang:
        sms = "उच्च आर्द्रतेमुळे टोमॅटो पिकात बुरशीचा धोका वाढत आहे. प्रतिबंधात्मक उपाय लवकर करा."
    else:
        sms = f"Alert for {crop} in {region}: {weather} conditions may increase disease risk. Take preventive action."

    return {
        "sms": sms,
        "whatsapp": f"📢 *Agricultural Advisory for {crop}* 📢\n\nDear Farmer from {region}, due to {weather}, there is a high risk of disease. 🌿\n\n✅ Action: Apply preventive fungicide.\n✅ Stay safe!",
        "voice_script": f"Hello! This is an automated advisory for your {crop} farm in {region}. Due to current {weather} conditions, please check for disease signs.",
        "visual_concept": f"An image showing a healthy {crop} farm on one side and a diseased one on the other, with a 'Prevent now' banner in {lang}.",
        "product_awareness": f"Protect your {crop} with our premium crop protection solutions. Visit your nearest dealer in {region}.",
        "preventive_alert": f"CRITICAL ALERT: {weather} in {region} is favorable for outbreaks in {crop}. Monitor fields daily."
    }
