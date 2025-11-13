import React from 'react';

interface HealthBarProps {
  currentHealth: number;
  maxHealth: number;
  name: string;
  isPlayer?: boolean;
}

export const HealthBar: React.FC<HealthBarProps> = ({
  currentHealth,
  maxHealth,
  name,
  isPlayer = false,
}) => {
  const percentage = (currentHealth / maxHealth) * 100;

  let barColor = 'bg-green-500';
  if (percentage < 50) barColor = 'bg-yellow-500';
  if (percentage < 25) barColor = 'bg-red-500';

  return (
    <div className={isPlayer ? 'mb-4' : 'mb-2'}>
      <div className="flex justify-between items-center mb-1">
        <span className={isPlayer ? 'text-lg font-bold text-white' : 'text-sm text-gray-300'}>
          {name}
        </span>
        <span className={isPlayer ? 'text-white' : 'text-xs text-gray-400'}>
          {Math.max(0, currentHealth)} / {maxHealth}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded h-6 overflow-hidden border border-gray-600">
        <div
          className={`${barColor} h-full transition-all duration-300 flex items-center justify-center`}
          style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
        >
          {isPlayer && percentage > 20 && (
            <span className="text-xs font-bold text-white">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
