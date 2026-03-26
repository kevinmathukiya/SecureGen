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
  
    const n = chars.length;
    let password = "";
    const maxUint32 = 4294967296; // 2^32
    const limit = maxUint32 - (maxUint32 % n);
    
    // To ensure at least one of each selected type (if length allows)
    const activeTypes = Object.entries(options).filter(([_, active]) => active);
    
    // First, pick one from each active type
    if (length >= activeTypes.length) {
      activeTypes.forEach(([type, _]) => {
        const set = charset[type];
        const tempBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(tempBuffer);
        password += set[tempBuffer[0] % set.length];
      });
    }

    // Fill the rest with rejection sampling
    while (password.length < length) {
      // Create a small buffer to reduce calls to getRandomValues
      const buffer = new Uint32Array(Math.max(length, 10));
      window.crypto.getRandomValues(buffer);
      
      for (let i = 0; i < buffer.length && password.length < length; i++) {
        if (buffer[i] < limit) {
          password += chars[buffer[i] % n];
        }
      }
    }
  
    // Shuffle the result to avoid predictable placement of the guaranteed characters
    const shuffled = password.split('');
    for (let i = shuffled.length - 1; i > 0; i--) {
      const buffer = new Uint32Array(1);
      window.crypto.getRandomValues(buffer);
      const j = buffer[0] % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.join('');
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