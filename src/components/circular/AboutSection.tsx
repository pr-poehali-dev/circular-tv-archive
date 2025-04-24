
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#1A1F2C] mb-6">Телеканал <span className="text-[#9b87f5]">«Циркуляр»</span></h2>
          <p className="text-lg mb-6 text-gray-700">
            Исторический телеканал, погружающий зрителя в атмосферу 19-20 веков через уникальные черно-белые коллажи и документальные материалы. 
          </p>
          <p className="text-lg mb-8 text-gray-700">
            Наша миссия — сделать историю доступной и увлекательной, сохраняя аутентичность и историческую точность в каждом выпуске.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] transition-colors">
            Смотреть программу <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

const ImageCard = () => (
  <Card className="overflow-hidden bg-white p-2">
    <img src="/placeholder.svg" alt="Исторический коллаж" className="w-full h-48 object-cover grayscale" />
  </Card>
);

export default AboutSection;
