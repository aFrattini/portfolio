import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './components/Projects'; 
import TitanicProject from './pages/TitanicProject';
import ClusterPaisesProject from './pages/ClusterPaisesProject';
import SuperstoreProject from './pages/SuperstoreProject';
import MnistProject from './pages/MnistProject';
import Header from './components/Header';
import Footer from './components/Footer';
import './CSS/App.css';

function App() {
  return (
    <Router> 
      <ScrollToTop /> 
      <Header />  
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/titanic" element={<TitanicProject />} />
          <Route path="/proyectos/cluster-paises" element={<ClusterPaisesProject />} />
          <Route path="/proyectos/superstore" element={<SuperstoreProject />} />
          <Route path="/proyectos/mnist" element={<MnistProject />} />

        {/* otros proyectos futuros */}
      </Routes>
      </div>
      <section id="contact">
        <Footer />
      </section>
    </Router>
  );
}

export default App;
