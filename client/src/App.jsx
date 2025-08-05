import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alumni from './pages/Alumni';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/alumni" element={<Alumni />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
