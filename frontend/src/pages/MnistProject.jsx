import { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import axios from 'axios';
import '../CSS/MnistProject.css';

export default function MnistProject() {
  const canvasRef = useRef(null);
  const resultRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false); // NUEVO

  const handlePredict = async () => {
    try {
      const dataUrl = await canvasRef.current.exportImage('png');
      const image = new window.Image();
      image.src = dataUrl;

      image.onload = async () => {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = 28;
        offCanvas.height = 28;
        const ctx = offCanvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(image, 0, 0, 28, 28);

        const imgData = ctx.getImageData(0, 0, 28, 28);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const color = avg > 60 ? 255 : 0;
          data[i] = data[i + 1] = data[i + 2] = color;
          data[i + 3] = 255;
        }
        ctx.putImageData(imgData, 0, 0);

        offCanvas.toBlob(async (blob) => {
          const formData = new FormData();
          formData.append('file', blob, 'digit.png');
          const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/mnist/predict`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          setPrediction(res.data.digit);
          if (res.data.probabilities) {
            const probs = res.data.probabilities[0];
            const maxProb = Math.max(...probs);
            setConfidence((maxProb * 100).toFixed(1));
          }

          // Solo hacer scroll la primera vez
          if (!hasScrolled && resultRef.current) {
            setTimeout(() => {
              resultRef.current.scrollIntoView({ behavior: 'smooth' });
              setHasScrolled(true);
            }, 100);
          }
        });
      };
    } catch (err) {
      console.error('Error exportando la imagen del canvas:', err);
    }
  };

  const clearCanvas = async () => {
    await canvasRef.current.clearCanvas();
    setPrediction(null);
    setConfidence(null);
    setHasScrolled(false); // Reinicia scroll si se limpia
  };

  return (
    <div className="mnist-background">
      <div className="mnist-project-container">
        <h2 className="mnist-title">Reconocimiento de Dígitos Manuscritos (MNIST)</h2>
        <div className="project-description">
          Este proyecto demuestra la aplicación de <strong>Inteligencia Artificial</strong> para el reconocimiento de dígitos escritos a mano utilizando el famoso dataset MNIST. Puedes dibujar cualquier número del 0 al 9 y el sistema realizará una predicción, mostrando además el nivel de certeza del modelo para esa predicción.
          <br /><br />
          El modelo fue entrenado en Python con TensorFlow/Keras. Todo el proceso de entrenamiento y evaluación se encuentra 
          <a className="project-link" href="https://github.com/aFrattini/mnist-digit-recognition" target="_blank" rel="noopener noreferrer"><br /> en este Jupyter Notebook disponible en mi GitHub </a>.
        </div>

        <div className="mnist-demo-box">
          <h3 className="mnist-section-title">¿Cómo funciona la demo?</h3>
          <p>
            Dibuja un número en el recuadro, presiona <strong>Predecir</strong> y verás el resultado junto con el porcentaje de confianza.
          </p>
        </div>

        <div className="mnist-canvas-zone">
          <ReactSketchCanvas
            ref={canvasRef}
            width="280px"
            height="280px"
            strokeWidth={15}
            strokeColor="#FFFFFF"
            canvasColor="#000000"        
            withTimestamp={true}
            style={{
              border: '2px solid #fff',
              borderRadius: '8px',
              backgroundColor: '#000000',
            }}
            className="mnist-canvas"
          />
          <div className="mnist-buttons">
            <button className="btn btn-predict" onClick={handlePredict}>Predecir</button>
            <button className="btn btn-clear" onClick={clearCanvas}>Limpiar</button>
          </div>

          {prediction !== null && (
            <div className="mnist-prediction-box" ref={resultRef}>
              <h3 className="mnist-pred-title">Resultado de la predicción:</h3>
              <div className="mnist-pred-flex">
                <span className="mnist-pred-number-big">{prediction}</span>
                <span className="mnist-pred-confidence-big">
                  {confidence !== null && (
                    <>
                      <span className="mnist-pred-label">Confianza:&nbsp;</span>
                      <span>{confidence}%</span>
                    </>
                  )}
                </span>
              </div>
              <div className="mnist-pred-tip">Si el modelo no acierta, intenta dibujar el número más centrado y claro.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
