// Utility functions for managing user preferences
const STORAGE_KEYS = {
  ACTIVE_THEME: 'active-theme',
  LAST_USED_PRESET: 'last-used-preset',
  AUTO_APPLY_THEME: 'auto-apply-theme',
  COLOR_FORMAT: 'color-format',
  UI_PREFERENCES: 'ui-preferences'
};

export const PreferenceManager = {
  setActiveTheme: (themeName) => {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_THEME, themeName);
  },

  getActiveTheme: () => {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_THEME) || 'default';
  },

  setLastUsedPreset: (presetName) => {
    localStorage.setItem(STORAGE_KEYS.LAST_USED_PRESET, presetName);
  },

  getLastUsedPreset: () => {
    return localStorage.getItem(STORAGE_KEYS.LAST_USED_PRESET) || 'default';
  },

  setAutoApplyTheme: (shouldAutoApply) => {
    localStorage.setItem(STORAGE_KEYS.AUTO_APPLY_THEME, JSON.stringify(shouldAutoApply));
  },

  getAutoApplyTheme: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.AUTO_APPLY_THEME) || 'true');
  },

  setColorFormat: (format) => {
    localStorage.setItem(STORAGE_KEYS.COLOR_FORMAT, format);
  },

  getColorFormat: () => {
    return localStorage.getItem(STORAGE_KEYS.COLOR_FORMAT) || 'hex';
  },

  setUIPreference: (key, value) => {
    const preferences = PreferenceManager.getUIPreferences();
    preferences[key] = value;
    localStorage.setItem(STORAGE_KEYS.UI_PREFERENCES, JSON.stringify(preferences));
  },

  getUIPreferences: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.UI_PREFERENCES) || '{}');
  },

  clearAllPreferences: () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  },

  exportPreferences: () => {
    const preferences = {};
    Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
      preferences[key] = localStorage.getItem(storageKey);
    });
    return preferences;
  },

  importPreferences: (preferences) => {
    Object.entries(preferences).forEach(([key, value]) => {
      if (STORAGE_KEYS[key] && value !== null) {
        localStorage.setItem(STORAGE_KEYS[key], value);
      }
    });
  }
};