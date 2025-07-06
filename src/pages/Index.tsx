
import React, { useState } from 'react';
import GameHeader from '@/components/GameHeader';
import GameDashboard from '@/components/GameDashboard';
import ChoiceCard from '@/components/ChoiceCard';
import PersonalityResult from '@/components/PersonalityResult';
import { Button } from '@/components/ui/button';
import { Home, ShoppingCart, Car, Gift, Laptop, Plane } from 'lucide-react';

interface GameState {
  budget: number;
  savings: number;
  mentalHealth: number;
  funLevel: number;
  currentDay: number;
  gameEnded: boolean;
  currentChoiceIndex: number;
}

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = useState<GameState>({
    budget: 50000,
    savings: 0,
    mentalHealth: 80,
    funLevel: 60,
    currentDay: 1,
    gameEnded: false,
    currentChoiceIndex: 0
  });

  const salary = 50000;
  const totalDays = 30;
  const savingsGoal = 15000;

  const gameChoices = [
    {
      title: "Housing Decision",
      description: "You need a place to stay this month. What's your move?",
      icon: <Home className="w-6 h-6" />,
      choices: [
        { text: "Luxury 1BHK in prime location", cost: 25000, budgetImpact: -25000, mentalHealthImpact: 10, funImpact: 5 },
        { text: "Shared apartment with friends", cost: 12000, budgetImpact: -12000, mentalHealthImpact: 5, funImpact: 15 },
        { text: "Budget PG accommodation", cost: 8000, budgetImpact: -8000, mentalHealthImpact: -5, funImpact: -5 }
      ]
    },
    {
      title: "Grocery Shopping",
      description: "Time to stock up on food for the week. How will you eat?",
      icon: <ShoppingCart className="w-6 h-6" />,
      choices: [
        { text: "Premium organic groceries", cost: 8000, budgetImpact: -8000, mentalHealthImpact: 5, funImpact: 0 },
        { text: "Regular supermarket run", cost: 5000, budgetImpact: -5000, mentalHealthImpact: 0, funImpact: 0 },
        { text: "Budget-friendly local market", cost: 3000, budgetImpact: -3000, mentalHealthImpact: -2, funImpact: -3 }
      ]
    },
    {
      title: "Your Laptop Crashed!",
      description: "Disaster strikes! Your laptop won't start and you need it for work.",
      icon: <Laptop className="w-6 h-6" />,
      choices: [
        { text: "Buy the latest MacBook Pro", cost: 150000, budgetImpact: -150000, mentalHealthImpact: 10, funImpact: 20 },
        { text: "Get a decent mid-range laptop", cost: 50000, budgetImpact: -50000, mentalHealthImpact: 5, funImpact: 5 },
        { text: "Repair the old one", cost: 8000, budgetImpact: -8000, mentalHealthImpact: -5, funImpact: -10 }
      ]
    },
    {
      title: "Friend's Goa Trip Invitation",
      description: "Your best friend invited you to an amazing weekend in Goa. FOMO is real!",
      icon: <Plane className="w-6 h-6" />,
      choices: [
        { text: "YOLO! Book the trip", cost: 15000, budgetImpact: -15000, mentalHealthImpact: 15, funImpact: 25 },
        { text: "Maybe next time...", cost: 0, budgetImpact: 0, mentalHealthImpact: -10, funImpact: -15 },
        { text: "Negotiate a budget version", cost: 8000, budgetImpact: -8000, mentalHealthImpact: 5, funImpact: 10 }
      ]
    }
  ];

  const handleChoice = (choice: any) => {
    setGameState(prev => {
      const newBudget = prev.budget + choice.budgetImpact;
      const newSavings = choice.budgetImpact < 0 ? prev.savings : prev.savings + Math.abs(choice.budgetImpact);
      const newMentalHealth = Math.max(0, Math.min(100, prev.mentalHealth + choice.mentalHealthImpact));
      const newFunLevel = Math.max(0, Math.min(100, prev.funLevel + choice.funImpact));
      const nextChoiceIndex = prev.currentChoiceIndex + 1;
      const nextDay = Math.floor((nextChoiceIndex / gameChoices.length) * totalDays) + 1;

      return {
        ...prev,
        budget: newBudget,
        savings: newSavings,
        mentalHealth: newMentalHealth,
        funLevel: newFunLevel,
        currentDay: nextDay,
        currentChoiceIndex: nextChoiceIndex,
        gameEnded: nextChoiceIndex >= gameChoices.length || newBudget <= 0
      };
    });
  };

  const getPersonalityResult = () => {
    const { budget, savings, mentalHealth, funLevel } = gameState;
    
    if (savings >= savingsGoal && mentalHealth >= 70) {
      return {
        type: "Budget Baddie 🔥",
        emoji: "🔥",
        description: "You mastered the art of smart spending while keeping your sanity intact!"
      };
    } else if (funLevel >= 80) {
      return {
        type: "Chill Spender 😎",
        emoji: "😎",
        description: "You prioritized experiences and happiness over strict budgeting!"
      };
    } else if (savings >= savingsGoal) {
      return {
        type: "Future-You Obsessed 📈",
        emoji: "📈",
        description: "You're all about that financial security, even if it means sacrificing some fun!"
      };
    } else {
      return {
        type: "Learning Spender 🎓",
        emoji: "🎓",
        description: "Every financial decision is a lesson. You're building great money habits!"
      };
    }
  };

  const restartGame = () => {
    setGameState({
      budget: 50000,
      savings: 0,
      mentalHealth: 80,
      funLevel: 60,
      currentDay: 1,
      gameEnded: false,
      currentChoiceIndex: 0
    });
    setGameStarted(false);
    setPlayerName('');
  };

  const startGame = () => {
    if (playerName.trim()) {
      setGameStarted(true);
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full text-center">
          <div className="text-6xl mb-4">💰</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Budget Battle</h1>
          <p className="text-gray-600 mb-6">Survive the month with smart financial choices!</p>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <Button 
            onClick={startGame}
            disabled={!playerName.trim()}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl"
          >
            Start Your Financial Journey
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.gameEnded) {
    const personality = getPersonalityResult();
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <PersonalityResult
          personalityType={personality.type}
          emoji={personality.emoji}
          description={personality.description}
          finalBudget={gameState.budget}
          finalSavings={gameState.savings}
          savingsGoal={savingsGoal}
          onRestart={restartGame}
        />
      </div>
    );
  }

  const currentChoice = gameChoices[gameState.currentChoiceIndex % gameChoices.length];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
      <div className="max-w-4xl mx-auto">
        <GameHeader
          playerName={playerName}
          currentDay={gameState.currentDay}
          totalDays={totalDays}
          salary={salary}
        />
        
        <GameDashboard
          budget={gameState.budget}
          savings={gameState.savings}
          mentalHealth={gameState.mentalHealth}
          funLevel={gameState.funLevel}
          savingsGoal={savingsGoal}
        />
        
        <div className="mt-6">
          <ChoiceCard
            title={currentChoice.title}
            description={currentChoice.description}
            choices={currentChoice.choices}
            onChoice={handleChoice}
            icon={currentChoice.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
