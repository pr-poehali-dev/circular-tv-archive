
import { Film } from "lucide-react";

const CircularFooter = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Film className="h-5 w-5" />
          <h3 className="text-xl font-bold">Циркуляр</h3>
        </div>
        <p className="text-sm text-gray-400">Телеканал по истории 19-20 веков с черно-белыми коллажами</p>
        <p className="text-xs mt-4 text-gray-500">© {new Date().getFullYear()} Циркуляр. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default CircularFooter;
