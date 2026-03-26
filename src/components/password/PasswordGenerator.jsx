'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { Copy, RefreshCw, Check, ShieldCheck, Settings2 } from 'lucide-react';
import { cn } from '../../lib/utils';
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
    const activeCount = Object.values(options).filter(Boolean).length;
    if (activeCount === 1 && options[key]) {
      toast.warning("At least one character type must be selected");
      return;
    }
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full animate-fade-in">
      <Card className="border-border/60 shadow-2xl bg-card/80 backdrop-blur-3xl ring-1 ring-border shadow-primary/5 h-full rounded-[32px] overflow-hidden">
        <CardHeader className="pb-6 pt-8 px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="font-heading text-2xl font-bold tracking-tight mb-1">Generate Password</CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Create strong, secure passwords instantly
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pb-8 px-6 sm:px-8">
          {/* Password Display */}
          <div className="relative group">
            <div className="relative flex items-center justify-center p-6 sm:p-10 bg-muted/40 rounded-[16px] border border-border/50 min-h-[100px]">
              <p className="font-mono text-xl sm:text-2xl break-all text-center font-bold tracking-widest text-foreground selection:bg-primary/30">
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
                      className="h-8 w-8 hover:bg-white/5 rounded-lg"
                      onClick={handleGenerate}
                    >
                      <RefreshCw className="h-4 w-4 text-muted-foreground" />
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
              className="w-full h-12 text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all rounded-xl bg-primary text-primary-foreground"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 stroke-[3px]" /> Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </>
              )}
            </Button>
            <Button
              onClick={handleGenerate}
              variant="secondary"
              className="w-full h-12 text-xs font-black uppercase tracking-[0.15em] rounded-xl hover:scale-[1.02] transition-all border-border/20 bg-muted/50 hover:bg-muted"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Generate
            </Button>
          </div>

          {/* Controls Section */}
          <div className="space-y-6 pt-6 border-t border-border/20">
            {/* Length Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-bold flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-muted-foreground" />
                  Password Length
                </Label>
                <span className="text-2xl font-black font-mono text-primary min-w-[3rem] text-center">
                  {length}
                </span>
              </div>
              <div className="px-1">
                <Slider
                  value={[length]}
                  onValueChange={(vals) => setLength(vals[0])}
                  min={4}
                  max={64}
                  step={1}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Character Set Toggles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'uppercase', label: 'Uppercase (A-Z)' },
                { id: 'lowercase', label: 'Lowercase (a-z)' },
                { id: 'numbers', label: 'Numbers (0-9)' },
                { id: 'symbols', label: 'Symbols (!@#)' },
              ].map((opt) => (
                <div 
                  key={opt.id} 
                  className={cn(
                    "flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300",
                    options[opt.id] 
                      ? "bg-primary/10 border-primary/30 shadow-sm shadow-primary/5" 
                      : "bg-muted/10 border-border/20 opacity-60"
                  )}
                >
                  <Label 
                    htmlFor={opt.id} 
                    className={cn(
                      "cursor-pointer text-[11px] font-bold leading-none pr-2 transition-colors",
                      options[opt.id] ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {opt.label}
                  </Label>
                  <Switch
                    id={opt.id}
                    checked={options[opt.id]}
                    onCheckedChange={() => handleOptionChange(opt.id)}
                    className="scale-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Privacy Badge */}
      <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
        <ShieldCheck className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">100% Client-Side Private</span>
      </div>
    </div>
  );
};
