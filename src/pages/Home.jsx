import ShopLocation from '../components/ShopLocation';
import CTASection from '../components/CTASection';
import CustomerJourney from '../components/CustomerJourney';
import FAQSection from '../components/FAQSection';
import GoldLoanCalculator from '../components/GoldLoanCalculator';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import LoanBenefits from '../components/LoanBenefits';
import LoanSchemesSection from '../components/LoanSchemesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustCards from '../components/TrustCards';
import WhyChooseUs from '../components/WhyChooseUs';

function Home() {
  return (
    <>
      <HeroSection />
      <TrustCards />
      <GoldLoanCalculator />
      <LoanSchemesSection />
      <WhyChooseUs />
      <HowItWorks />
      <LoanBenefits />
      <CustomerJourney />
      <ShopLocation />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default Home;
