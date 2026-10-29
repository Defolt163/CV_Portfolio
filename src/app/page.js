import Image from "next/image";
import Header from "./components/Header";
import PromoBlock from "./components/Promo/Promo";
import WorkBlock from "./components/WorkBlock/WorkBlock";
import PortfolioBlock from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PromoBlock/>
      <WorkBlock/>
      <PortfolioBlock/>
      <AboutMe/>
    </div>
  );
}
