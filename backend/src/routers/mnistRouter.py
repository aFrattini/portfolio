from fastapi import APIRouter, UploadFile, File
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
from scipy import ndimage

router = APIRouter()
model = load_model("mnist_models/mnist_model.h5")

def preprocess_image(img):
    img = img.resize((28, 28)).convert("L")
    img_array = np.array(img)

    

    # Opcional: binariza suavemente (puedes omitir si prefieres)
    img_array = (img_array > 20) * img_array

    # Centrado por centro de masa (mejora precisión)
    cy, cx = ndimage.center_of_mass(img_array)
    shiftx = int(np.round(14 - cx))
    shifty = int(np.round(14 - cy))
    img_array = ndimage.shift(img_array, shift=[shifty, shiftx], mode='constant')

    # Normaliza y da forma
    img_array = img_array / 255.0
    img_array = img_array.reshape(1, 28, 28)
    return img_array

@router.post("/mnist/predict")
async def predict_digit(file: UploadFile = File(...)):
    img = Image.open(file.file)
    img_array = preprocess_image(img)

    # Debug image
    Image.fromarray((img_array.reshape(28, 28) * 255).astype(np.uint8)).save("debug.png")

    prediction = model.predict(img_array)
    digit = int(np.argmax(prediction))
    return {
        "digit": digit,
        "probabilities": prediction.tolist()
    }

