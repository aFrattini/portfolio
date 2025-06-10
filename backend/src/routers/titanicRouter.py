import json
from fastapi import APIRouter

from routers.models import ModelPredict, Number
from routers.utils import data_to_predict
from routers.models import mapped_models

router = APIRouter()

@router.get("/titanic/health")
async def titanic_health():
    return {"message": "OK"}


@router.get("/titanic/info")
async def titanic_info():
    with open("routers/utils/modelsInfo.json", 'r') as file:
        json_info = json.load(file)

    return json_info

@router.post("/titanic/predict")
async def predict(requets: ModelPredict):
    data = data_to_predict(requets.pclass, requets.age, requets.sib, requets.parch, requets.gender)
    
    model = mapped_models.get(requets.model_ml, "regresion")

    result = model.predict_proba(data)[0]
    return {"probability_0":result[0], "probability_1": result[1]}
