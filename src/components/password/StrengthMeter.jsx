import React from 'react';
import { cn } from '@/lib/utils';
import { getStrengthLabel, getStrengthColor, getStrengthColorValue } from '@/lib/password-utils';

export const StrengthMeter = ({ score }) => {
  const label = getStrengthLabel(score);
  const activeColor = getStrengthColor(score);
  const activeColorValue = getStrengthColorValue(score);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground font-medium">Strength</span>
        <span className={cn("font-semibold transition-colors duration-300", 
          score <= 2 ? "text-red-500" : score <= 3 ? "text-yellow-500" : "text-green-500"
        )}>
          {label}
        </span>
      </div>
      <div className="flex gap-1 h-2 w-full">
        {[1, 2, 3, 4, 5].map((index) => {
          const isActive = index <= score;
          return (
            <div
              key={index}
              className={cn(
                "h-full flex-1 rounded-full transition-all duration-500 ease-out",
                isActive ? activeColor : "bg-muted"
              )}
              style={isActive ? { backgroundColor: activeColorValue } : {}}
            />
          );
        })}
      </div>
    </div>
  );
};
