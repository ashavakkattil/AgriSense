
def translate_text(text: str, target_language: str = "hi"):
    # TODO: integrate IndicTrans2 translation model
    return {
        "input": text,
        "target_language": target_language,
        "translation": f"[translated {text} to {target_language}]",
    }
