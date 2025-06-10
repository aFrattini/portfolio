from pydantic import BaseModel

class ModelPredict(BaseModel):
    pclass: int
    age: int
    sib: int
    parch: int
    gender: str
    model_ml: str

class Number(BaseModel):
    number: int



# Impotacion de modelos
import os
import joblib

# Directorio base es la raíz del repo donde se ejecuta uvicorn
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MODEL_DIR = os.path.join(BASE_DIR, "ml_models")

mapped_models = {
    "regresion": joblib.load(os.path.join(MODEL_DIR, "logistic_regression.joblib")),
    "knn": joblib.load(os.path.join(MODEL_DIR, "knn.joblib")),
    "arbol": joblib.load(os.path.join(MODEL_DIR, "decision_tree.joblib")),
    "random_forest": joblib.load(os.path.join(MODEL_DIR, "random_forest.joblib"))

}