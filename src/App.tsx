import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Feature from './pages/Feature';
import GoogleAnalytics from './components/GoogleAnalytics';




function App() {
  return (
    <Router>
       <GoogleAnalytics/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/feature" element={<Feature/>} />
      </Routes>
    </Router>
  );
}

export default App;
