import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")


def generate_advice(disease):
    prompt = f"""
    Give farming advice for {disease}.
    Include:
    - treatment
    - prevention
    - yield improvement
    """

    if not GROQ_API_KEY:
        return (
            "GROQ_API_KEY is not configured. "
            "Set GROQ_API_KEY in backend/.env to enable advisory responses."
        )

    try:
        from groq import Groq

        client = Groq(api_key=GROQ_API_KEY)
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )
        return response.choices[0].message.content
    except Exception:
        return "Advisory service is not available in this environment."
