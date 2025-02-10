/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';
import ThemeCustomizer from '../ThemeCustomizer';
import PreviewCard from '../PreviewCard';
import Toast from '../Toast';

describe('Theme System Components', () => {
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
    jest.spyOn(window.localStorage, 'setItem');
    jest.clearAllMocks();
  });

  describe('ThemeCustomizer', () => {
    it('should render theme customizer toggle button', () => {
      render(
        <ThemeProvider>
          <ThemeCustomizer />
        </ThemeProvider>
      );
      expect(screen.getByLabelText('Toggle theme customizer')).toBeInTheDocument();
    });

    it('should open/close theme customizer panel', () => {
      render(
        <ThemeProvider>
          <ThemeCustomizer />
        </ThemeProvider>
      );
      const toggleButton = screen.getByLabelText('Toggle theme customizer');

      // Initially closed
      expect(screen.queryByText('Theme Customizer')).not.toBeVisible();

      // Open panel
      fireEvent.click(toggleButton);
      expect(screen.getByText('Theme Customizer')).toBeVisible();

      // Close panel
      fireEvent.click(toggleButton);
      expect(screen.queryByText('Theme Customizer')).not.toBeVisible();
    });

    it('should save theme preset', async () => {
      render(
        <ThemeProvider>
          <ThemeCustomizer />
        </ThemeProvider>
      );

      // Open customizer
      fireEvent.click(screen.getByLabelText('Toggle theme customizer'));

      // Enter preset name
      const input = screen.getByPlaceholderText('New preset name');
      fireEvent.change(input, { target: { value: 'Test Theme' } });

      // Save preset
      fireEvent.click(screen.getByText('Save'));

      // Check toast message
      expect(await screen.findByText('Theme "Test Theme" saved successfully!')).toBeInTheDocument();

      // Verify localStorage call
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('PreviewCard', () => {
    const mockTheme = {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#ff0000',
      },
    };

    it('should render all preview sections', () => {
      render(<PreviewCard theme={mockTheme} />);

      expect(screen.getByText('Theme Preview')).toBeInTheDocument();
      expect(screen.getByText('Buttons')).toBeInTheDocument();
      expect(screen.getByText('Card')).toBeInTheDocument();
      expect(screen.getByText('Typography')).toBeInTheDocument();
    });

    it('should show tooltip on link hover', async () => {
      render(<PreviewCard theme={mockTheme} />);

      const link = screen.getByText('Link example');
      fireEvent.mouseEnter(link);

      expect(await screen.findByText('Hover state')).toBeInTheDocument();

      fireEvent.mouseLeave(link);
      expect(screen.queryByText('Hover state')).not.toBeInTheDocument();
    });
  });

  describe('Toast', () => {
    it('should show and auto-hide toast message', () => {
      jest.useFakeTimers();

      const onClose = jest.fn();
      render(<Toast message="Test message" type="success" duration={3000} onClose={onClose} />);

      expect(screen.getByText('Test message')).toBeInTheDocument();

      // Fast-forward time
      act(() => {
        jest.advanceTimersByTime(3000);
      });

      expect(onClose).toHaveBeenCalled();

      jest.useRealTimers();
    });

    it('should close toast on button click', () => {
      const onClose = jest.fn();
      render(<Toast message="Test message" type="success" onClose={onClose} />);

      fireEvent.click(screen.getByText('✕'));
      expect(screen.getByText('Test message')).not.toBeVisible();
    });
  });
});
