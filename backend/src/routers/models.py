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
import joblib

mapped_models = {
    "regresion": joblib.load("../ml_models/logistic_regression.joblib"),
    "tree": joblib.load("../ml_models/decision_tree.joblib"),
    "forest": joblib.load("../ml_models/random_forest.joblib"),   
    "knn": joblib.load("../ml_models/knn.joblib")
}