
import { BarChart3, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type FinanceItemProps = {
  label: string;
  amount: string;
};

const FinanceItem = ({ label, amount }: FinanceItemProps) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-semibold">{amount}</span>
  </div>
);

type StatBoxProps = {
  value: string;
  label: string;
  color: string;
  bgColor: string;
};

const StatBox = ({ value, label, color, bgColor }: StatBoxProps) => (
  <div className={`${bgColor} p-4 rounded-lg`}>
    <p className={`text-center font-bold text-lg ${color}`}>{value}</p>
    <p className="text-center text-sm">{label}</p>
  </div>
);

const FinanceSection = () => {
  return (
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
              <FinanceItem label="Создание контента" amount="4 000 ₽" />
              <FinanceItem label="Реклама" amount="3 000 ₽" />
              <FinanceItem label="Оборудование" amount="3 000 ₽" />
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
              <FinanceItem label="Годовой доход" amount="20 000 ₽" />
              <FinanceItem label="Месячный доход (средний)" amount="1 667 ₽" />
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
              <StatBox 
                value="4 месяца" 
                label="до полной окупаемости" 
                bgColor="bg-[#E5DEFF]"
                color="text-[#6E59A5]"
              />
              <StatBox 
                value="20 000 ₽" 
                label="годовой доход" 
                bgColor="bg-[#F2FCE2]"
                color="text-[#4B7F52]"
              />
              <StatBox 
                value="100%" 
                label="годовая рентабельность" 
                bgColor="bg-[#FEF7CD]"
                color="text-[#8A6E0F]"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
