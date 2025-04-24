
import { Card } from "@/components/ui/card";

type PointProps = {
  type: 'pro' | 'con';
  text: string;
};

const Point = ({ type, text }: PointProps) => {
  const bgColor = type === 'pro' ? 'bg-[#E5DEFF]' : 'bg-[#FDE1D3]';
  const textColor = type === 'pro' ? 'text-[#9b87f5]' : 'text-[#F97316]';
  const symbol = type === 'pro' ? '✓' : '!';

  return (
    <li className="flex items-start">
      <div className={`h-6 w-6 rounded-full ${bgColor} flex items-center justify-center ${textColor} mr-3`}>
        {symbol}
      </div>
      <p>{text}</p>
    </li>
  );
};

const AdvantagesSection = () => {
  const pros = [
    "Уникальная ниша исторического контента с фокусом на 19-20 века",
    "Оригинальный визуальный стиль с черно-белыми коллажами",
    "Быстрая окупаемость инвестиций (4 месяца)",
    "Растущий интерес к историческому образовательному контенту"
  ];

  const cons = [
    "Узкая целевая аудитория может ограничить масштабирование",
    "Высокие затраты на исследования и создание исторически точного контента",
    "Конкуренция с крупными историческими каналами",
    "Необходимость постоянного обновления контента"
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">Плюсы и Минусы Стартапа</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 border-l-4 border-[#9b87f5]">
            <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Преимущества</h3>
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <Point key={index} type="pro" text={pro} />
              ))}
            </ul>
          </Card>

          <Card className="p-6 border-l-4 border-[#FEC6A1]">
            <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Недостатки</h3>
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <Point key={index} type="con" text={con} />
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
