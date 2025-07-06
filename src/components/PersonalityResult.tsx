
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, RefreshCw, Share } from 'lucide-react';

interface PersonalityResultProps {
  personalityType: string;
  emoji: string;
  description: string;
  finalBudget: number;
  finalSavings: number;
  savingsGoal: number;
  onRestart: () => void;
}

const PersonalityResult = ({ 
  personalityType, 
  emoji, 
  description, 
  finalBudget, 
  finalSavings, 
  savingsGoal, 
  onRestart 
}: PersonalityResultProps) => {
  const goalAchieved = finalSavings >= savingsGoal;

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
      <div className="mb-6">
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{personalityType}</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">{description}</p>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-6">
        <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6" />
          Final Results
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-purple-100 text-sm">Final Budget</p>
            <p className="text-2xl font-bold">₹{finalBudget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-purple-100 text-sm">Final Savings</p>
            <p className="text-2xl font-bold">₹{finalSavings.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white/20 rounded-lg">
          <p className="font-semibold">
            {goalAchieved ? "🎉 Goal Achieved!" : "😅 Goal Not Met"}
          </p>
          <p className="text-sm">
            Target: ₹{savingsGoal.toLocaleString()} | 
            You saved: {((finalSavings / savingsGoal) * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onRestart}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Play Again
        </Button>
        
        <Button 
          variant="outline"
          className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-xl"
        >
          <Share className="w-5 h-5 mr-2" />
          Share Result
        </Button>
      </div>
    </div>
  );
};

export default PersonalityResult;
