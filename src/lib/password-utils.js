export const generatePassword = (length, options) => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };
  
    let chars = "";
    if (options.uppercase) chars += charset.uppercase;
    if (options.lowercase) chars += charset.lowercase;
    if (options.numbers) chars += charset.numbers;
    if (options.symbols) chars += charset.symbols;
  
    // Fallback if nothing selected
    if (chars === "") chars = charset.lowercase;
  
    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      password += chars[array[i] % chars.length];
    }
  
    return password;
  };
  
  export const calculateStrength = (password) => {
    let score = 0;
    if (!password) return 0;
  
    if (password.length > 8) score += 1;
    if (password.length > 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
  
    return Math.min(score, 5); // 0-5 scale
  };
  
  export const getStrengthLabel = (score) => {
    switch (score) {
      case 0: return "Very Weak";
      case 1: return "Weak";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Strong";
      case 5: return "Very Strong";
      default: return "Unknown";
    }
  };
  
  export const getStrengthColor = (score) => {
    switch (score) {
      case 0: return "bg-red-500";
      case 1: return "bg-red-400";
      case 2: return "bg-orange-400";
      case 3: return "bg-yellow-400";
      case 4: return "bg-green-400";
      case 5: return "bg-green-600";
      default: return "bg-gray-200";
    }
  };

  // Get color value for inline styles (fallback)
  export const getStrengthColorValue = (score) => {
    switch (score) {
      case 0: return "#ef4444"; // red-500
      case 1: return "#f87171"; // red-400
      case 2: return "#fb923c"; // orange-400
      case 3: return "#facc15"; // yellow-400
      case 4: return "#4ade80"; // green-400
      case 5: return "#16a34a"; // green-600
      default: return "#e5e7eb"; // gray-200
    }
  };