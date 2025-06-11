from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from src.routers.titanicRouter import router as TitanicRouter


app = FastAPI()

# Permitir solo tu frontend de Render
origins = [
    "https://antonellafrattiniporfolio.onrender.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],              # Métodos HTTP permitidos
    allow_headers=["*"],              # Encabezados permitidos
)


# Registrar el router
app.include_router(TitanicRouter)
