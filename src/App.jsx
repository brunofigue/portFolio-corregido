import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';  
import SectionContact from './pages/SectionContact';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Home from './components/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router> 
      <Layout> 
        <Routes> 
          <Route path="/"element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<SectionContact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;