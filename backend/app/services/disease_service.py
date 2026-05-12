from PIL import Image
from torchvision import transforms

classes = [
    "Tomato Early Blight",
    "Healthy",
    "Leaf Mold",
]

def predict_disease(file):
    image = Image.open(file).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
    ])
    image_tensor = transform(image).unsqueeze(0)
    # TODO: replace mock prediction with EfficientNet model inference
    prediction = 0
    return classes[prediction]
