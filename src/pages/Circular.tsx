
import React from "react";
import { ChevronRight, Film, Clock, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CircularPage = () => {
  return (
    <div className="bg-[#F1F0FB] min-h-screen">
      {/* Шапка */}
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

      {/* Главный раздел */}
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
            <Card className="overflow-hidden bg-white p-2">
              <img src="/placeholder.svg" alt="Исторический коллаж" className="w-full h-48 object-cover grayscale" />
            </Card>
            <Card className="overflow-hidden bg-white p-2">
              <img src="/placeholder.svg" alt="Исторический коллаж" className="w-full h-48 object-cover grayscale" />
            </Card>
            <Card className="overflow-hidden bg-white p-2">
              <img src="/placeholder.svg" alt="Исторический коллаж" className="w-full h-48 object-cover grayscale" />
            </Card>
            <Card className="overflow-hidden bg-white p-2">
              <img src="/placeholder.svg" alt="Исторический коллаж" className="w-full h-48 object-cover grayscale" />
            </Card>
          </div>
        </div>
      </section>

      {/* Плюсы и минусы */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Плюсы и Минусы Стартапа</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-[#9b87f5]">
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Преимущества</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5] mr-3">✓</div>
                  <p>Уникальная ниша исторического контента с фокусом на 19-20 века</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5] mr-3">✓</div>
                  <p>Оригинальный визуальный стиль с черно-белыми коллажами</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5] mr-3">✓</div>
                  <p>Быстрая окупаемость инвестиций (4 месяца)</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5] mr-3">✓</div>
                  <p>Растущий интерес к историческому образовательному контенту</p>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-[#FEC6A1]">
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Недостатки</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#FDE1D3] flex items-center justify-center text-[#F97316] mr-3">!</div>
                  <p>Узкая целевая аудитория может ограничить масштабирование</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#FDE1D3] flex items-center justify-center text-[#F97316] mr-3">!</div>
                  <p>Высокие затраты на исследования и создание исторически точного контента</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#FDE1D3] flex items-center justify-center text-[#F97316] mr-3">!</div>
                  <p>Конкуренция с крупными историческими каналами</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#FDE1D3] flex items-center justify-center text-[#F97316] mr-3">!</div>
                  <p>Необходимость постоянного обновления контента</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Финансы */}
      <section id="finances" className="py-16 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Финансовый План</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="mb-4 flex items-center">
                <BarChart3 className="h-8 w-8 text-[#9b87f5] mr-3" />
                <h3 className="text-2xl font-bold">Расходы</h3>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Создание контента</span>
                  <span className="font-semibold">4 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Реклама</span>
                  <span className="font-semibold">3 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Оборудование</span>
                  <span className="font-semibold">3 000 ₽</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого</span>
                  <span>10 000 ₽</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex items-center">
                <BarChart3 className="h-8 w-8 text-[#9b87f5] mr-3" />
                <h3 className="text-2xl font-bold">Доходы</h3>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Годовой доход</span>
                  <span className="font-semibold">20 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Месячный доход (средний)</span>
                  <span className="font-semibold">1 667 ₽</span>
                </div>
                <div className="h-12"></div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Годовая прибыль</span>
                  <span>10 000 ₽</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex items-center">
                <Clock className="h-8 w-8 text-[#9b87f5] mr-3" />
                <h3 className="text-2xl font-bold">Окупаемость</h3>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="bg-[#E5DEFF] p-4 rounded-lg">
                  <p className="text-center font-bold text-lg text-[#6E59A5]">4 месяца</p>
                  <p className="text-center text-sm">до полной окупаемости</p>
                </div>
                <div className="bg-[#F2FCE2] p-4 rounded-lg">
                  <p className="text-center font-bold text-lg text-[#4B7F52]">20 000 ₽</p>
                  <p className="text-center text-sm">годовой доход</p>
                </div>
                <div className="bg-[#FEF7CD] p-4 rounded-lg">
                  <p className="text-center font-bold text-lg text-[#8A6E0F]">100%</p>
                  <p className="text-center text-sm">годовая рентабельность</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Film className="h-5 w-5" />
            <h3 className="text-xl font-bold">Циркуляр</h3>
          </div>
          <p className="text-sm text-gray-400">Телеканал по истории 19-20 веков с черно-белыми коллажами</p>
          <p className="text-xs mt-4 text-gray-500">© 2023 Циркуляр. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default CircularPage;
