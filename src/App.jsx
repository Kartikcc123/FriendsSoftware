import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Company from './pages/Company';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import InsightCategoryPage from './pages/insights/InsightCategoryPage';

import Education from './pages/industries/Education';
import FinancialServices from './pages/industries/FinancialServices';
import Healthcare from './pages/industries/Healthcare';
import InsuranceInsurtech from './pages/industries/InsuranceInsurtech';
import Legaltech from './pages/industries/Legaltech';
import Manufacturing from './pages/industries/Manufacturing';
import Retail from './pages/industries/Retail';
import TransportationLogistics from './pages/industries/TransportationLogistics';
function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="dark:bg-brand-dark dark:text-brand-white min-h-screen flex flex-col transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/insights/:slug" element={<InsightCategoryPage />} />
              <Route path="/company" element={<Company />} />
              <Route path="/industries/education" element={<Education />} />
              <Route path="/industries/financial-services" element={<FinancialServices />} />
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/insurance-insurtech" element={<InsuranceInsurtech />} />
              <Route path="/industries/legaltech" element={<Legaltech />} />
              <Route path="/industries/manufacturing" element={<Manufacturing />} />
              <Route path="/industries/retail" element={<Retail />} />
              <Route path="/industries/transportation-logistics" element={<TransportationLogistics />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </div>
    </Router>
  );
}

export default App;
