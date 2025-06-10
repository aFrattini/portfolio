import TestConnection from '../components/TestConnection'
import '../CSS/TitanicProject.css'; 


function TitanicProject() {
  return (
    <div className="titanic-container">
      <h1 className="titanic-title">Predicción de supervivencia - Titanic</h1>
      <p className="titanic-description">
      Este proyecto de Machine Learning aborda la predicción de la supervivencia de pasajeros del Titanic a partir de 
      variables como clase social, edad, género y vínculos familiares. Se entrenaron modelos de clasificación 
      (regresión logística y árbol de decisión) utilizando datos históricos reales para estimar la probabilidad de 
      supervivencia. En esta página podés interactuar con el modelo eligiendo diferentes parámetros y observar cómo 
      cambian las probabilidades. <br />
      También podés acceder al Jupyter Notebook completo, donde se realiza la exploración, 
      limpieza del dataset y el entrenamiento de los modelos.
      
      <a href="https://github.com/aFrattini/titanic-survival-prediction" target="_blank" rel="noopener noreferrer">Ver notebook en GitHub</a>
      </p>
      <TestConnection />
    </div>
  )
}

export default TitanicProject;
