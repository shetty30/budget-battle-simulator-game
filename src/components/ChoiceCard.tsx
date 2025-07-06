
import React from 'react';
import { Button } from '@/components/ui/button';

interface Choice {
  text: string;
  cost: number;
  budgetImpact: number;
  mentalHealthImpact: number;
  funImpact: number;
}

interface ChoiceCardProps {
  title: string;
  description: string;
  choices: Choice[];
  onChoice: (choice: Choice) => void;
  icon: React.ReactNode;
}

const ChoiceCard = ({ title, description, choices, onChoice, icon }: ChoiceCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="space-y-3">
        {choices.map((choice, index) => (
          <Button
            key={index}
            onClick={() => onChoice(choice)}
            className="w-full justify-between bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105"
          >
            <span>{choice.text}</span>
            <span className="font-bold">
              {choice.cost > 0 ? `-₹${choice.cost.toLocaleString()}` : choice.cost < 0 ? `+₹${Math.abs(choice.cost).toLocaleString()}` : 'Free'}
            </span>
          </Button>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-xl">
        <p className="text-sm text-gray-600 font-medium">💡 Think carefully - every choice affects your budget, mood, and goals!</p>
      </div>
    </div>
  );
};

export default ChoiceCard;
