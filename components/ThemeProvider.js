import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { defaultTheme, loadThemePreset } from '../config/theme';
import { PreferenceManager } from '../utils/PreferenceManager';
import ThemeTransitionLoader from './ThemeTransitionLoader';

const ThemeContext = createContext();

// Debounce helper
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ initialTheme = defaultTheme, children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preferences, setPreferences] = useState({
    colorFormat: 'hex',
    autoApply: true,
    transitionDuration: 300 // milliseconds
  });

  // Load saved preferences on mount
  useEffect(() => {
    const savedThemeName = PreferenceManager.getActiveTheme();
    const savedTheme = loadThemePreset(savedThemeName);
    
    if (savedTheme) {
      setTheme(savedTheme);
    }

    setPreferences(prev => ({
      ...prev,
      colorFormat: PreferenceManager.getColorFormat(),
      autoApply: PreferenceManager.getAutoApplyTheme()
    }));
  }, []);

  const applyThemeToDOM = useCallback(debounce((themeToApply) => {
    if (typeof window === 'undefined') return;

    setIsTransitioning(true);

    const root = document.documentElement;
    
    // Apply transition classes for smooth changes
    root.style.setProperty(
      '--theme-transition-duration',
      `${preferences.transitionDuration}ms`
    );
    root.classList.add('theme-transitioning');

    // Apply theme properties
    Object.entries(themeToApply.colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--color-${key}-${subKey}`, subValue);
        });
      } else {
        root.style.setProperty(`--color-${key}`, value);
      }
    });

    // Apply other theme properties
    Object.entries(themeToApply.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    Object.entries(themeToApply.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Remove transition class after changes are complete
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, preferences.transitionDuration);
  }, 50), [preferences.transitionDuration]);

  const updateTheme = useCallback((newTheme) => {
    setTheme((currentTheme) => {
      const updatedTheme = {
        ...currentTheme,
        ...newTheme,
      };

      if (preferences.autoApply) {
        applyThemeToDOM(updatedTheme);
      }

      return updatedTheme;
    });
  }, [preferences.autoApply, applyThemeToDOM]);

  const updatePreferences = useCallback((newPreferences) => {
    setPreferences(current => {
      const updated = { ...current, ...newPreferences };
      
      // Save preferences
      if ('colorFormat' in newPreferences) {
        PreferenceManager.setColorFormat(newPreferences.colorFormat);
      }
      if ('autoApply' in newPreferences) {
        PreferenceManager.setAutoApplyTheme(newPreferences.autoApply);
      }

      return updated;
    });
  }, []);

  // Apply initial theme
  useEffect(() => {
    if (preferences.autoApply) {
      applyThemeToDOM(theme);
    }
  }, [theme, preferences.autoApply, applyThemeToDOM]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      updateTheme,
      preferences,
      updatePreferences,
      applyThemeToDOM,
      isTransitioning
    }}>
      <ThemeTransitionLoader isVisible={isTransitioning} />
      {children}
    </ThemeContext.Provider>
  );
};