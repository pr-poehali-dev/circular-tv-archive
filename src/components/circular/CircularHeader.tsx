
import { Film } from "lucide-react";

const CircularHeader = () => {
  return (
    <header className="bg-[#1A1F2C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Film className="h-6 w-6" />
          <h1 className="text-2xl font-bold tracking-tight">Циркуляр</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-[#9b87f5] transition-colors">О Канале</a></li>
            <li><a href="#advantages" className="hover:text-[#9b87f5] transition-colors">Преимущества</a></li>
            <li><a href="#finances" className="hover:text-[#9b87f5] transition-colors">Финансы</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CircularHeader;
