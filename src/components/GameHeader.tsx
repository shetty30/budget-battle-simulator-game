
import React from 'react';
import { Calendar, Trophy, User } from 'lucide-react';

interface GameHeaderProps {
  playerName: string;
  currentDay: number;
  totalDays: number;
  salary: number;
}

const GameHeader = ({ playerName, currentDay, totalDays, salary }: GameHeaderProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, {playerName}!</h1>
            <p className="text-gray-600">Your monthly salary: ₹{salary.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Day {currentDay} of {totalDays}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-xl">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Budget Battle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
