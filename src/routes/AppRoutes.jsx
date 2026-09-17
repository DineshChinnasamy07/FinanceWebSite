import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import GoldLoan from '../pages/GoldLoan';
import Home from '../pages/Home';
import HowItWorks from '../pages/HowItWorks';
import LoanSchemes from '../pages/LoanSchemes';
import Shop from '../pages/Shop';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gold-loan" element={<GoldLoan />} />
        <Route path="/loan-schemes" element={<LoanSchemes />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/branches" element={<Navigate to="/shop" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
