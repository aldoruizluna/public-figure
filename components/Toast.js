import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, type = 'success', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={`toast ${type} ${isVisible ? 'visible' : ''}`}>
      <span className="icon">{getIcon()}</span>
      <span className="message">{message}</span>
      <button onClick={() => setIsVisible(false)} className="close-button" aria-label="Close notification">
        ✕
      </button>

      <style jsx>{`
        .toast {
          position: relative;
          padding: var(--spacing-md);
          border-radius: var(--spacing-xs);
          background: var(--color-background-primary);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          transform: translateX(120%);
          opacity: 0;
          transition: all var(--animation-duration-normal) var(--animation-easing-default);
          max-width: 400px;
          width: 100%;
        }

        .toast.visible {
          transform: translateX(0);
          opacity: 1;
        }

        .toast.success {
          border-left: 4px solid #4caf50;
        }

        .toast.error {
          border-left: 4px solid #f44336;
        }

        .toast.warning {
          border-left: 4px solid #ff9800;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          font-size: 14px;
        }

        .toast.success .icon {
          background: #e8f5e9;
          color: #4caf50;
        }

        .toast.error .icon {
          background: #ffebee;
          color: #f44336;
        }

        .toast.warning .icon {
          background: #fff3e0;
          color: #ff9800;
        }

        .message {
          flex: 1;
          font-size: var(--font-size-small);
          line-height: 1.4;
        }

        .close-button {
          background: none;
          border: none;
          padding: var(--spacing-xs);
          cursor: pointer;
          opacity: 0.6;
          transition: opacity var(--animation-duration-fast) var(--animation-easing-default);
          font-size: var(--font-size-small);
        }

        .close-button:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .toast {
            max-width: 100%;
            margin: 0 var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

export default Toast;