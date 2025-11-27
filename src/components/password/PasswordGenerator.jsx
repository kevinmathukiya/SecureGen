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
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center mb-2">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-center font-heading text-2xl">Generate Password</CardTitle>
          <CardDescription className="text-center">
            Create strong, secure passwords instantly
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Password Display */}
          <div className="relative group">
            <div className="relative flex items-center justify-center p-6 bg-muted/50 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-muted/80">
              <p className="font-mono text-2xl md:text-3xl break-all text-center font-medium tracking-wider text-foreground">
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
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={copyToClipboard} 
              className="w-full h-12 text-base font-medium uppercase tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              size="lg"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-5 w-5" /> Copy
                </>
              )}
            </Button>
            <Button 
              onClick={handleGenerate}
              variant="secondary"
              className="w-full h-12 text-base font-medium uppercase tracking-wide"
              size="lg"
            >
              <RefreshCw className="mr-2 h-5 w-5" /> Generate
            </Button>
          </div>

          {/* Controls Section */}
          <div className="space-y-6 pt-4 border-t">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-muted-foreground" />
                  Password Length
                </Label>
                <span className="text-lg font-bold font-mono bg-primary/10 text-primary px-3 py-1 rounded-md min-w-[3rem] text-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="uppercase" className="cursor-pointer">Uppercase (A-Z)</Label>
                <Switch
                  id="uppercase"
                  checked={options.uppercase}
                  onCheckedChange={() => handleOptionChange('uppercase')}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="lowercase" className="cursor-pointer">Lowercase (a-z)</Label>
                <Switch
                  id="lowercase"
                  checked={options.lowercase}
                  onCheckedChange={() => handleOptionChange('lowercase')}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="numbers" className="cursor-pointer">Numbers (0-9)</Label>
                <Switch
                  id="numbers"
                  checked={options.numbers}
                  onCheckedChange={() => handleOptionChange('numbers')}
                />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Label htmlFor="symbols" className="cursor-pointer">Symbols (!@#)</Label>
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
