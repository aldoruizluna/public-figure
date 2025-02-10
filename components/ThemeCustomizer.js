import { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import {
  createTheme,
  saveThemePreset,
  loadThemePreset,
  getAllThemePresets,
  exportThemePresets,
  importThemePresets,
} from '../config/theme';
import PreviewCard from './PreviewCard';
import Toast from './Toast';

const ThemeCustomizer = () => {
  const { theme, updateTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [presets, setPresets] = useState({});
  const [newPresetName, setNewPresetName] = useState('');
  const [activePreset, setActivePreset] = useState('default');
  const [toasts, setToasts] = useState([]);
  const fileInputRef = useRef(null);
  const toastIdCounter = useRef(0);

  useEffect(() => {
    setPresets(getAllThemePresets());
  }, []);

  const addToast = (message, type = 'success') => {
    const id = toastIdCounter.current++;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const handleColorChange = (colorKey, value) => {
    const newTheme = createTheme({
      colors: {
        [colorKey]: value,
      },
    });
    updateTheme(newTheme);
  };

  const handleSavePreset = () => {
    if (newPresetName) {
      try {
        saveThemePreset(newPresetName, theme);
        setPresets(getAllThemePresets());
        setNewPresetName('');
        addToast(`Theme "${newPresetName}" saved successfully!`);
      } catch (error) {
        addToast('Error saving theme preset', 'error');
      }
    }
  };

  const handleLoadPreset = (presetName) => {
    try {
      const loadedTheme = loadThemePreset(presetName);
      updateTheme(loadedTheme);
      setActivePreset(presetName);
      addToast(`Theme "${presetName}" loaded successfully!`);
    } catch (error) {
      addToast('Error loading theme preset', 'error');
    }
  };

  const handleExportPresets = () => {
    try {
      exportThemePresets();
      addToast('Theme presets exported successfully!');
    } catch (error) {
      addToast('Error exporting theme presets', 'error');
    }
  };

  const handleImportPresets = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const { presets, warnings } = await importThemePresets(file);
        setPresets(presets);

        // Show success message
        addToast('Theme presets imported successfully!', 'success');

        // Show warnings if any
        if (warnings.length > 0) {
          warnings.forEach((warning) => {
            addToast(warning, 'warning');
          });
        }
      } catch (error) {
        addToast(error.message || 'Error importing theme presets', 'error');
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <>
      <div className={`theme-customizer ${isOpen ? 'open' : ''}`}>
        <button
          className="theme-customizer-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle theme customizer"
        >
          {isOpen ? '✕' : '🎨'}
        </button>

        <div className="theme-customizer-content">
          <h3>Theme Customizer</h3>

          <div className="preset-manager">
            <h4>Theme Presets</h4>

            <div className="preset-controls">
              <select value={activePreset} onChange={(e) => handleLoadPreset(e.target.value)}>
                {Object.keys(presets).map((presetName) => (
                  <option key={presetName} value={presetName}>
                    {presetName}
                  </option>
                ))}
              </select>

              <div className="preset-actions">
                <button
                  className="icon-button"
                  onClick={handleExportPresets}
                  title="Export presets"
                >
                  📤
                </button>
                <button
                  className="icon-button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Import presets"
                >
                  📥
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImportPresets}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className="save-preset">
              <input
                type="text"
                placeholder="New preset name"
                value={newPresetName}
                onChange={(e) => setNewPresetName(e.target.value)}
              />
              <button onClick={handleSavePreset} disabled={!newPresetName}>
                Save
              </button>
            </div>
          </div>

          <div className="color-pickers">
            <div className="color-picker">
              <label>Primary Color</label>
              <input
                type="color"
                value={theme.colors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
              />
            </div>
            <div className="color-picker">
              <label>Secondary Color</label>
              <input
                type="color"
                value={theme.colors.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
              />
            </div>
            <div className="color-picker">
              <label>Accent Color</label>
              <input
                type="color"
                value={theme.colors.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
              />
            </div>
          </div>

          <PreviewCard theme={theme} />
        </div>

        <style jsx>{`
          .theme-customizer {
            position: fixed;
            right: -300px;
            top: 50%;
            transform: translateY(-50%);
            width: 300px;
            background: var(--color-background-primary);
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
            transition: right var(--animation-duration-normal) var(--animation-easing-default);
            z-index: 1000;
            border-radius: 8px 0 0 8px;
          }

          .theme-customizer.open {
            right: 0;
          }

          .theme-customizer-content {
            padding: var(--spacing-md);
            display: none;
          }

          .theme-customizer.open .theme-customizer-content {
            display: block;
          }

          .color-pickers {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .color-picker {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .color-picker label {
            margin-right: var(--spacing-sm);
          }

          .color-picker input {
            width: 50px;
            height: 30px;
            padding: 0;
            border: 1px solid var(--color-text-secondary);
            border-radius: var(--spacing-xs);
          }

          .preset-manager {
            margin-bottom: var(--spacing-lg);
            padding: var(--spacing-md);
            background: var(--color-background-secondary);
            border-radius: var(--spacing-xs);
          }

          .preset-manager h4 {
            margin-bottom: var(--spacing-sm);
          }

          .preset-controls {
            display: flex;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-sm);
          }

          .preset-controls select {
            flex: 1;
          }

          .preset-actions {
            display: flex;
            gap: var(--spacing-xs);
          }

          .icon-button {
            padding: var(--spacing-xs);
            background: var(--color-background-primary);
            border: 1px solid var(--color-text-secondary);
            border-radius: var(--spacing-xs);
            cursor: pointer;
            transition: all var(--animation-duration-fast) var(--animation-easing-default);
          }

          .icon-button:hover {
            background: var(--color-background-secondary);
          }

          .preset-manager select {
            width: 100%;
            margin-bottom: var(--spacing-sm);
            padding: var(--spacing-sm);
            border: 1px solid var(--color-text-secondary);
            border-radius: var(--spacing-xs);
            background: var(--color-background-primary);
          }

          .save-preset {
            display: flex;
            gap: var(--spacing-sm);
          }

          .save-preset input {
            flex: 1;
            padding: var(--spacing-sm);
            border: 1px solid var(--color-text-secondary);
            border-radius: var(--spacing-xs);
          }

          .save-preset button {
            padding: var(--spacing-sm) var(--spacing-md);
            background: var(--color-primary);
            color: var(--color-text-light);
            border: none;
            border-radius: var(--spacing-xs);
            cursor: pointer;
            transition: background-color var(--animation-duration-fast)
              var(--animation-easing-default);
          }

          .save-preset button:hover {
            background: var(--color-secondary);
          }

          .save-preset button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .save-preset button:disabled:hover {
            background: var(--color-primary);
          }

          .toast-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
            z-index: 1100;
          }
        `}</style>
      </div>

      <div className="toast-container">
        {toasts.map(({ id, message, type }) => (
          <Toast
            key={id}
            message={message}
            type={type}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== id))}
          />
        ))}
      </div>
    </>
  );
};

export default ThemeCustomizer;
