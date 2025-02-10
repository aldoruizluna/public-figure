import { useState } from 'react';
import PropTypes from 'prop-types';

const PreviewCard = ({ theme }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="theme-preview">
      <h4>Theme Preview</h4>
      
      <div className="preview-elements">
        {/* Button previews */}
        <div className="preview-section">
          <h5>Buttons</h5>
          <button className="primary-btn">Primary</button>
          <button className="secondary-btn">Secondary</button>
          <button className="accent-btn">Accent</button>
        </div>

        {/* Card preview */}
        <div className="preview-section">
          <h5>Card</h5>
          <div className="preview-card">
            <h6>Card Title</h6>
            <p>Sample card content with theme colors</p>
            <button>Action</button>
          </div>
        </div>

        {/* Text preview */}
        <div className="preview-section">
          <h5>Typography</h5>
          <div className="text-preview">
            <h6>Heading</h6>
            <p>Regular paragraph text</p>
            <a href="#" 
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Link example
              {showTooltip && <span className="tooltip">Hover state</span>}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .theme-preview {
          margin-top: var(--spacing-lg);
          padding: var(--spacing-md);
          background: var(--color-background-secondary);
          border-radius: var(--spacing-xs);
        }

        .preview-elements {
          display: grid;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }

        .preview-section {
          padding: var(--spacing-sm);
        }

        .preview-section h5 {
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-secondary);
        }

        .primary-btn, .secondary-btn, .accent-btn {
          margin-right: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          border: none;
          border-radius: var(--spacing-xs);
          cursor: pointer;
        }

        .primary-btn {
          background: var(--color-primary);
          color: var(--color-text-light);
        }

        .secondary-btn {
          background: var(--color-secondary);
          color: var(--color-text-light);
        }

        .accent-btn {
          background: var(--color-accent);
          color: var(--color-text-light);
        }

        .preview-card {
          padding: var(--spacing-md);
          background: var(--color-background-primary);
          border-radius: var(--spacing-xs);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .text-preview {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .text-preview a {
          color: var(--color-primary);
          text-decoration: none;
          position: relative;
          display: inline-block;
        }

        .tooltip {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: var(--spacing-xs) var(--spacing-sm);
          background: var(--color-primary);
          color: var(--color-text-light);
          border-radius: var(--spacing-xs);
          font-size: 0.8em;
          white-space: nowrap;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

PreviewCard.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default PreviewCard;