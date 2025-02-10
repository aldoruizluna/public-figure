// Default theme configuration
export const defaultTheme = {
  colors: {
    primary: '#222222',
    secondary: '#4CC3D9',
    accent: '#FF4081',
    background: {
      primary: '#FFFFFF',
      secondary: '#F4F4F4',
      dark: '#000000',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Helvetica Neue', Arial, sans-serif",
      secondary: "'Georgia', serif",
    },
    fontSize: {
      small: '0.875rem',
      base: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
      xxlarge: '2rem',
      hero: '2.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  layout: {
    containerWidth: {
      small: '640px',
      medium: '768px',
      large: '1024px',
      xlarge: '1200px',
    },
    borderRadius: {
      small: '3px',
      medium: '5px',
      large: '8px',
      round: '9999px',
    },
  },
};

// Example alternative theme
export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#BB86FC',
    secondary: '#03DAC6',
    accent: '#FF4081',
    background: {
      primary: '#121212',
      secondary: '#1E1E1E',
      dark: '#000000',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      light: '#FFFFFF',
    },
  },
};

// Theme validation schema
const themeSchema = {
  required: ['colors', 'typography', 'spacing', 'animation', 'layout'],
  colors: {
    required: ['primary', 'secondary', 'accent', 'background', 'text'],
    background: ['primary', 'secondary', 'dark'],
    text: ['primary', 'secondary', 'light']
  },
  typography: {
    required: ['fontFamily', 'fontSize', 'fontWeight'],
    fontFamily: ['primary', 'secondary'],
    fontSize: ['small', 'base', 'large', 'xlarge', 'xxlarge', 'hero'],
    fontWeight: ['normal', 'medium', 'bold']
  }
};

// Validation helper functions
const validateColor = (color) => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  return hexRegex.test(color) || rgbRegex.test(color);
};

const validateTheme = (theme) => {
  const errors = [];

  // Check required top-level properties
  themeSchema.required.forEach(prop => {
    if (!theme[prop]) {
      errors.push(`Missing required property: ${prop}`);
    }
  });

  // Validate colors
  if (theme.colors) {
    themeSchema.colors.required.forEach(colorKey => {
      if (!theme.colors[colorKey]) {
        errors.push(`Missing required color: ${colorKey}`);
      } else if (typeof theme.colors[colorKey] === 'string' && !validateColor(theme.colors[colorKey])) {
        errors.push(`Invalid color format for ${colorKey}: ${theme.colors[colorKey]}`);
      } else if (typeof theme.colors[colorKey] === 'object') {
        const requiredSubColors = themeSchema.colors[colorKey] || [];
        requiredSubColors.forEach(subColor => {
          if (!theme.colors[colorKey][subColor]) {
            errors.push(`Missing required sub-color: ${colorKey}.${subColor}`);
          } else if (!validateColor(theme.colors[colorKey][subColor])) {
            errors.push(`Invalid color format for ${colorKey}.${subColor}: ${theme.colors[colorKey][subColor]}`);
          }
        });
      }
    });
  }

  // Validate typography
  if (theme.typography) {
    themeSchema.typography.required.forEach(typoProp => {
      if (!theme.typography[typoProp]) {
        errors.push(`Missing required typography property: ${typoProp}`);
      } else {
        const requiredValues = themeSchema.typography[typoProp] || [];
        requiredValues.forEach(value => {
          if (!theme.typography[typoProp][value]) {
            errors.push(`Missing required typography value: ${typoProp}.${value}`);
          }
        });
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Sanitize theme to ensure all required properties exist
const sanitizeTheme = (theme) => {
  const sanitized = { ...defaultTheme };

  // Merge colors
  if (theme.colors) {
    sanitized.colors = {
      ...sanitized.colors,
      ...theme.colors
    };
    
    // Merge nested color objects
    ['background', 'text'].forEach(colorGroup => {
      if (theme.colors[colorGroup]) {
        sanitized.colors[colorGroup] = {
          ...sanitized.colors[colorGroup],
          ...theme.colors[colorGroup]
        };
      }
    });
  }

  // Merge typography
  if (theme.typography) {
    sanitized.typography = {
      ...sanitized.typography,
      ...theme.typography
    };
  }

  // Merge other properties
  ['spacing', 'animation', 'layout'].forEach(prop => {
    if (theme[prop]) {
      sanitized[prop] = {
        ...sanitized[prop],
        ...theme[prop]
      };
    }
  });

  return sanitized;
};

// Function to create custom themes
export const createTheme = (customization) => {
  const newTheme = {
    ...defaultTheme,
    ...customization,
    colors: {
      ...defaultTheme.colors,
      ...(customization.colors || {})
    }
  };

  const validation = validateTheme(newTheme);
  if (!validation.isValid) {
    console.warn('Theme validation warnings:', validation.errors);
    return sanitizeTheme(newTheme);
  }

  return newTheme;
};

// Theme preset configuration
const themePresets = {
  default: defaultTheme,
  dark: darkTheme,
  // Add more preset themes here
};

export const saveThemePreset = (name, theme) => {
  if (typeof window !== 'undefined') {
    const presets = JSON.parse(localStorage.getItem('themePresets') || '{}');
    presets[name] = theme;
    localStorage.setItem('themePresets', JSON.stringify(presets));
  }
};

export const loadThemePreset = (name) => {
  if (typeof window !== 'undefined') {
    const presets = JSON.parse(localStorage.getItem('themePresets') || '{}');
    return presets[name] || themePresets[name] || defaultTheme;
  }
  return defaultTheme;
};

export const getAllThemePresets = () => {
  if (typeof window !== 'undefined') {
    const customPresets = JSON.parse(localStorage.getItem('themePresets') || '{}');
    return { ...themePresets, ...customPresets };
  }
  return themePresets;
};

export const exportThemePresets = () => {
  if (typeof window !== 'undefined') {
    const presets = getAllThemePresets();
    const dataStr = JSON.stringify(presets);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = 'theme-presets.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    linkElement.remove();
  }
};

export const importThemePresets = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const presets = JSON.parse(event.target.result);
        const validationErrors = [];

        Object.entries(presets).forEach(([name, theme]) => {
          const validation = validateTheme(theme);
          if (!validation.isValid) {
            validationErrors.push(`Theme "${name}": ${validation.errors.join(', ')}`);
          }
          // Save sanitized theme
          saveThemePreset(name, sanitizeTheme(theme));
        });

        if (validationErrors.length > 0) {
          console.warn('Theme validation warnings:', validationErrors);
        }

        resolve({
          presets: getAllThemePresets(),
          warnings: validationErrors
        });
      } catch (error) {
        reject(new Error('Invalid theme preset file'));
      }
    };
    
    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsText(file);
  });
};

// Export existing functionality
export { 
  themePresets,
  defaultTheme,
  darkTheme,
  saveThemePreset,
  loadThemePreset,
  getAllThemePresets,
  exportThemePresets
};