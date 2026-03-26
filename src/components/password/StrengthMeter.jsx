import React from 'react';
import { cn } from '@/lib/utils';
import { getStrengthLabel, getStrengthColor, getStrengthColorValue } from '@/lib/password-utils';

export const StrengthMeter = ({ score }) => {
  const label = getStrengthLabel(score);
  const activeColorValue = getStrengthColorValue(score);

  return (
    <div className="w-full space-y-2" role="progressbar" aria-label="Password Strength" aria-valuenow={score} aria-valuemin="0" aria-valuemax="5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-bold text-muted-foreground">
          Strength
        </span>
        <span 
          className="text-xs font-bold transition-all duration-300"
          style={{ color: activeColorValue }}
        >
          {label}
        </span>
      </div>
      
      <div className="flex gap-1.5 h-2 w-full">
        {[1, 2, 3, 4, 5].map((index) => {
          const isActive = index <= score;
          return (
            <div
              key={index}
              className={cn(
                "h-full flex-1 rounded-full transition-all duration-500 ease-in-out",
                !isActive && "bg-muted/30"
              )}
              style={isActive ? { 
                backgroundColor: activeColorValue,
                boxShadow: `0 1px 4px ${activeColorValue}20`,
              } : {}}
            />
          );
        })}
      </div>
    </div>
  );
};
