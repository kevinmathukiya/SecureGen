'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { Copy, RefreshCw, Check, ShieldCheck, Settings2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { toast } from 'sonner';
import { generatePassword, calculateStrength } from '../../lib/password-utils';
import { StrengthMeter } from './StrengthMeter';

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [strength, setStrength] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(() => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
    setStrength(calculateStrength(newPassword));
    setCopied(false);
  }, [length, options]);

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Password copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy password");
    }
  };

  const handleOptionChange = (key) => {
    // Prevent unchecking the last option
    const activeCount = Object.values(options).filter(Boolean).length;
    if (activeCount === 1 && options[key]) {
      toast.warning("At least one character type must be selected");
      return;
    }
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full max-w-md animate-fade-in">
      <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 h-full">
        <CardHeader className="pb-4 sm:pb-6 px-4 sm:px-6">
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
          </div>
          <CardTitle className="text-center font-heading text-lg sm:text-xl md:text-2xl font-bold">Generate Password</CardTitle>
          <CardDescription className="text-center text-xs sm:text-sm leading-relaxed">
            Create strong, secure passwords instantly
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Password Display */}
          <div className="relative group">
            <div className="relative flex items-center justify-center p-4 sm:p-5 md:p-6 bg-muted/50 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-muted/80 min-h-[85px] sm:min-h-[100px] md:min-h-[110px]">
              <p className="font-mono text-sm sm:text-base md:text-lg lg:text-2xl break-all text-center font-medium tracking-wider text-foreground px-1 leading-snug">
                {password}
              </p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
               <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur hover:bg-background"
                      onClick={handleGenerate}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Regenerate</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Strength Meter */}
          <StrengthMeter score={strength} />

          {/* Main Action Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Button 
              onClick={copyToClipboard} 
              className="w-full h-10 sm:h-12 text-xs sm:text-sm font-medium uppercase tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              size="lg"
            >
              {copied ? (
                <>
                  <Check className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" /> <span className="hidden sm:inline">Copied</span><span className="sm:hidden">Copy</span>
                </>
              ) : (
                <>
                  <Copy className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" /> <span className="hidden sm:inline">Copy</span><span className="sm:hidden">Copy</span>
                </>
              )}
            </Button>
            <Button 
              onClick={handleGenerate}
              variant="secondary"
              className="w-full h-10 sm:h-12 text-xs sm:text-sm font-medium uppercase tracking-wide"
              size="lg"
            >
              <RefreshCw className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" /> <span className="hidden sm:inline">Generate</span><span className="sm:hidden">Gen</span>
            </Button>
          </div>

          {/* Controls Section */}
          <div className="space-y-4 sm:space-y-6 pt-3 sm:pt-4 border-t">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center gap-2">
                <Label className="text-xs sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                  <Settings2 className="h-3 sm:h-4 w-3 sm:w-4 text-muted-foreground" />
                  <span className="hidden sm:inline">Password Length</span>
                  <span className="sm:hidden">Length</span>
                </Label>
                <span className="text-base sm:text-lg font-bold font-mono bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-md min-w-[2.5rem] sm:min-w-[3rem] text-center text-sm sm:text-base">
                  {length}
                </span>
              </div>
              <Slider
                value={[length]}
                onValueChange={(vals) => setLength(vals[0])}
                min={4}
                max={64}
                step={1}
                className="cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center justify-between gap-2 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="uppercase" className="cursor-pointer text-xs sm:text-sm">Uppercase (A-Z)</Label>
                <Switch
                  id="uppercase"
                  checked={options.uppercase}
                  onCheckedChange={() => handleOptionChange('uppercase')}
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="lowercase" className="cursor-pointer text-xs sm:text-sm">Lowercase (a-z)</Label>
                <Switch
                  id="lowercase"
                  checked={options.lowercase}
                  onCheckedChange={() => handleOptionChange('lowercase')}
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="numbers" className="cursor-pointer text-xs sm:text-sm">Numbers (0-9)</Label>
                <Switch
                  id="numbers"
                  checked={options.numbers}
                  onCheckedChange={() => handleOptionChange('numbers')}
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="symbols" className="cursor-pointer text-xs sm:text-sm">Symbols (!@#)</Label>
                <Switch
                  id="symbols"
                  checked={options.symbols}
                  onCheckedChange={() => handleOptionChange('symbols')}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
