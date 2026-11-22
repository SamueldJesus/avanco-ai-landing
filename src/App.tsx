import { useState } from "react";
import { ComparisonSection } from "./components/ComparisonSection";
import { DiagnosticSection } from "./components/DiagnosticSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { InteractiveShowcase } from "./components/InteractiveShowcase";
import { ModularOfferSection } from "./components/ModularOfferSection";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import type { OfferStageId } from "./data/content";

export default function App() {
  const [selectedStage, setSelectedStage] = useState<OfferStageId>("combo");

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#11161F]">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="conteudo-principal">
        <HeroSection />
        <ComparisonSection />
        <InteractiveShowcase />
        <ModularOfferSection
          selectedStage={selectedStage}
          onSelectStage={setSelectedStage}
        />
        <ProcessSection />
        <DiagnosticSection
          selectedStage={selectedStage}
          onSelectStage={setSelectedStage}
        />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
