import { useState, useRef } from 'react'
import './CSS/TestConnections.css';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const resultRef = useRef(null);

function TestConnection () {
    const [pclass, setPclass] = useState(2)
    const [age, setAge] = useState(20)
    const [sib, setSib] = useState(0)
    const [parch, setParch] = useState(0)
    const [gender, setGender] = useState("female")
    const [model_ml, setModel] = useState("regresion")
    const [resultado, setResultado] = useState(null)

    const handlerNumber = async () => {
        const prediccion = {
            pclass: Number(pclass),
            age: Number(age),
            sib: Number(sib),
            parch: Number(parch),
            gender,
            model_ml
        }
        console.log("BACKEND URL:", import.meta.env.VITE_BACKEND_URL);

        try {
            const response = await fetch(`${API_URL}/titanic/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(prediccion)
            })

            if (!response.ok) {
                const text = await response.text()
                throw new Error(`Error ${response.status}: ${text}`)
            }

            const result = await response.json()
            setResultado(result)

                    // Hacer scroll al resultado
            setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth' })
            }, 100)

        } catch (e) {
            console.error(e)
            alert("La respuesta ha fallado: " + e.message)
        }
    }

    return (
        <div className="form-result-wrapper">
            <form className="form-container" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label>Clase:</label>
                    <select value={pclass} onChange={(e) => setPclass(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Edad:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Hermanos:</label>
                    <input type="number" value={sib} onChange={(e) => setSib(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Parientes/Hijos:</label>
                    <input type="number" value={parch} onChange={(e) => setParch(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Género:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Modelo:</label>
                    <select value={model_ml} onChange={(e) => setModel(e.target.value)}>
                        <option value="regresion">Regresión</option>
                        <option value="arbol">Árbol de decisiones</option>
                        <option value="random_forest">Bosques aleatorios</option>
                        <option value="knn">KNN</option>
                    </select>
                </div>
                <button className="form-button" onClick={handlerNumber}>Predecir</button>
            </form>

            {resultado && (
                <div className="prediction-result" ref={resultRef}>
                    <h3>Resultado de la predicción:</h3>
                    <p>Probabilidad de no sobrevivir: <strong>{(resultado.probability_0 * 100).toFixed(2)}%</strong></p>
                    <p>Probabilidad de sobrevivir: <strong>{(resultado.probability_1 * 100).toFixed(2)}%</strong></p>
                </div>
            )}
        </div>
    )
}

export default TestConnection
