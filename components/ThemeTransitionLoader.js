import { useState, useEffect } from 'react';

const ThemeTransitionLoader = ({ isVisible }) => {
  return (
    <div className={`theme-loader ${isVisible ? 'visible' : ''}`}>
      <div className="spinner">
        <div className="dot primary"></div>
        <div className="dot secondary"></div>
        <div className="dot accent"></div>
      </div>

      <style jsx>{`
        .theme-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--animation-duration-normal) var(--animation-easing-default);
        }

        .theme-loader.visible {
          opacity: 1;
        }

        .spinner {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          gap: 4px;
        }

        .dot {
          flex: 1;
          height: 100%;
          animation: loading 1s ease-in-out infinite;
        }

        .dot.primary {
          background-color: var(--color-primary);
          animation-delay: 0s;
        }

        .dot.secondary {
          background-color: var(--color-secondary);
          animation-delay: 0.2s;
        }

        .dot.accent {
          background-color: var(--color-accent);
          animation-delay: 0.4s;
        }

        @keyframes loading {
          0%, 100% {
            transform: scaleX(0.1);
            opacity: 0.2;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeTransitionLoader;