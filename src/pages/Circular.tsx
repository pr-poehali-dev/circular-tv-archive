
import React from "react";
import CircularHeader from "@/components/circular/CircularHeader";
import AboutSection from "@/components/circular/AboutSection";
import AdvantagesSection from "@/components/circular/AdvantagesSection";
import FinanceSection from "@/components/circular/FinanceSection";
import CircularFooter from "@/components/circular/CircularFooter";

/**
 * Страница телеканала "Циркуляр" - исторического канала о 19-20 веках
 * с использованием черно-белых коллажей и документальных материалов
 */
const CircularPage: React.FC = () => {
  return (
    <div className="bg-[#F1F0FB] min-h-screen">
      <CircularHeader />
      <AboutSection />
      <AdvantagesSection />
      <FinanceSection />
      <CircularFooter />
    </div>
  );
};

export default CircularPage;
