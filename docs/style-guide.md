# Style Guide

This document outlines the coding standards and style guidelines for the project.

## JavaScript/React Guidelines

### File Organization
- One component per file
- Use PascalCase for component files (e.g., `HeroSection.js`)
- Place reusable components in `/components`
- Keep pages in `/pages` directory
- Store configuration in `/config`

### Component Structure
```jsx
// 1. Imports
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// 2. Component Definition
const ComponentName = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState(null);
  const { t } = useTranslation();

  // 4. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // 5. Event Handlers
  const handleEvent = () => {
    // Handler logic
  };

  // 6. Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

// 7. Export
export default ComponentName;
```

### Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection`)
- **Functions:** camelCase (e.g., `handleSubmit`)
- **Files:** PascalCase for components, camelCase for utilities
- **CSS Classes:** kebab-case (e.g., `hero-section`)

### CSS/Styling Guidelines
- Use CSS modules for component-specific styles
- Follow BEM naming convention for global styles
- Maintain responsive design principles
- Use CSS variables for theming

### Code Formatting
- Use 2 spaces for indentation
- Add semicolons at the end of statements
- Use single quotes for strings
- Always use template literals for string interpolation
- Maintain consistent spacing around operators

### Best Practices
1. **State Management**
   - Keep state as local as possible
   - Use context for global state
   - Avoid prop drilling

2. **Performance**
   - Memoize callbacks with useCallback
   - Memoize expensive computations with useMemo
   - Use React.memo for pure components

3. **Accessibility**
   - Include proper ARIA attributes
   - Maintain keyboard navigation
   - Use semantic HTML elements

4. **Internationalization**
   - Use translation keys for all text content
   - Maintain translation files in JSON format
   - Follow i18next best practices

### White-labeling Standards
- Use CSS variables for brand colors
- Keep branding configuration in `/config/branding.js`
- Separate content from presentation
- Use configurable assets

### Git Commit Guidelines
- Use conventional commits format
- Keep commits atomic and focused
- Write clear commit messages

### Documentation
- Document all components with JSDoc
- Include prop-types
- Maintain README files
- Comment complex logic

## AI Development Guidelines

### For AI Assistants
1. **Code Generation**
   - Follow the established project structure
   - Maintain consistent naming conventions
   - Include necessary imports
   - Add appropriate comments

2. **Documentation**
   - Generate comprehensive JSDoc comments
   - Include usage examples
   - Document edge cases

3. **Testing**
   - Generate test cases
   - Cover edge cases
   - Follow testing patterns

### Component Creation Checklist
- [ ] Component file with proper name
- [ ] Proper imports
- [ ] PropTypes definition
- [ ] JSDoc documentation
- [ ] Responsive styles
- [ ] i18n implementation
- [ ] Error handling
- [ ] Accessibility features
- [ ] Unit tests

## Quality Assurance
- Run linting before commits
- Maintain test coverage
- Review for accessibility
- Check mobile responsiveness
- Verify i18n implementation