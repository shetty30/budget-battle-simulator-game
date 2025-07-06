
import React from 'react';
import { TrendingUp, Heart, Zap, Target, Wallet } from 'lucide-react';

interface GameDashboardProps {
  budget: number;
  savings: number;
  mentalHealth: number;
  funLevel: number;
  savingsGoal: number;
}

const GameDashboard = ({ budget, savings, mentalHealth, funLevel, savingsGoal }: GameDashboardProps) => {
  const progressPercentage = Math.min((savings / savingsGoal) * 100, 100);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Wallet className="text-purple-600" />
        Your Financial Dashboard
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Budget</p>
              <p className="text-2xl font-bold">₹{budget.toLocaleString()}</p>
            </div>
            <Wallet className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Savings</p>
              <p className="text-2xl font-bold">₹{savings.toLocaleString()}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100 text-sm font-medium">Mental Health</p>
              <p className="text-2xl font-bold">{mentalHealth}%</p>
            </div>
            <Heart className="w-8 h-8 text-pink-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm font-medium">Fun Level</p>
              <p className="text-2xl font-bold">{funLevel}%</p>
            </div>
            <Zap className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-gray-700">Savings Goal Progress</span>
          </div>
          <span className="text-sm text-gray-600">₹{savings.toLocaleString()} / ₹{savingsGoal.toLocaleString()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">{progressPercentage.toFixed(1)}% complete</p>
      </div>
    </div>
  );
};

export default GameDashboard;
