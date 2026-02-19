import "../styles/Page.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroworkSection";
import Logo from "../components/LogoworkSection";
import AboutSection from "../components/AboutworkSection";
import Collection from "../components/ColleactionworkSection";
import Feature from "../components/FeatureworkSection";
import CreatorworkSection from "../components/CreatorworkSection";
import FAQSection from "../components/FAQSection";
import NFTworkSection from "../components/NFTworkSection";
import Footer from "../components/Footer";
import PrismicNavbar from "../components/PrismicNavbar";



export default function Page() {
  return (
    <div className="page">
      {/* <Navbar /> */}
      <PrismicNavbar />
      <HeroSection />
      <Logo />
      <AboutSection />
      <Collection />
      <Feature />
      <CreatorworkSection />
      <FAQSection />
      <NFTworkSection />
      <Footer />
    </div>
  );
}
