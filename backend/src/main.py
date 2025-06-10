from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routers.titanicRouter import router as TitanicRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://antonellafrattiniporfolio.onrender.com/"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(TitanicRouter)