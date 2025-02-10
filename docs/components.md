# Component Documentation

## Overview
This document provides detailed information about each component in the system, their props, usage patterns, and examples.

## Core Components

### Layout (`components/Layout.js`)
The main layout wrapper component that provides the basic structure for all pages.

#### Props
None

#### Usage
```jsx
<Layout>
  <YourPageContent />
</Layout>
```

#### Features
- Responsive navigation
- Back to top button
- Footer integration
- Auto-adjusting navbar height

### Navbar (`components/Navbar.js`)
Main navigation component with responsive design and language switching.

#### Props
None

#### Features
- Responsive mobile menu
- Language switching (EN/ES)
- Scroll-aware styling
- Smooth scroll navigation

#### State
- `isMenuOpen`: Controls mobile menu visibility
- `scrolled`: Tracks scroll position for styling

### HeroSection (`components/HeroSection.js`)
Landing section with 3D animation background.

#### Props
None

#### Features
- A-Frame 3D integration
- Responsive design
- Internationalized content
- Animated background

### AboutSection (`components/AboutSection.js`)
About information section with i18n support.

#### Props
None

#### Features
- Internationalized content
- Responsive layout

### ServicesSection (`components/ServicesSection.js`)
Services showcase with grid layout.

#### Props
None

#### Features
- Responsive grid layout
- Service cards
- Hover animations
- i18n support

### PortfolioSection (`components/PortfolioSection.js`)
Portfolio display with image grid.

#### Props
None

#### Features
- Image grid layout
- Responsive design
- Dynamic image loading
- Hover effects

### BlogSection (`components/BlogSection.js`)
Blog posts display section.

#### Props
None

#### Features
- Blog post cards
- Read more links
- i18n support

### ContactSection (`components/ContactSection.js`)
Contact form with form handling.

#### Props
None

#### Features
- Form validation
- Submit handling
- i18n support
- Error handling

### Footer (`components/Footer.js`)
Site footer with dynamic year.

#### Props
None

#### Features
- Dynamic copyright year
- Branding integration

## Customization

### Adding New Components

1. Create component file in `/components`:
```jsx
import { useTranslation } from 'react-i18next';

const NewComponent = ({ prop1, prop2 }) => {
  const { t } = useTranslation();
  
  return (
    <section className="new-component">
      {/* Component content */}
    </section>
  );
};

export default NewComponent;
```

2. Add styles in `globals.css`
3. Add translations in `config/i18n.js`
4. Import and use in pages

### Extending Existing Components

#### Example: Adding Social Links to Footer
```jsx
// Footer.js
const Footer = () => {
  return (
    <footer>
      {/* Existing content */}
      <div className="social-links">
        {/* Social media links */}
      </div>
    </footer>
  );
};
```

## Component Best Practices

### Performance Optimization
1. Use React.memo for pure components
2. Implement useMemo for expensive calculations
3. Lazy load images and components
4. Optimize re-renders

### Accessibility
1. Use semantic HTML
2. Include ARIA labels
3. Maintain keyboard navigation
4. Provide alt text for images

### Internationalization
1. Use translation keys
2. Handle RTL languages
3. Format numbers and dates
4. Support multiple languages

### Testing
1. Write unit tests
2. Include integration tests
3. Test accessibility
4. Test responsiveness

## Common Patterns

### Form Handling
```jsx
const [formData, setFormData] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  // Form submission logic
};
```

### Responsive Design
```css
@media (max-width: 768px) {
  .component {
    /* Mobile styles */
  }
}
```

### Animation Integration
```jsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  // Animation logic
}, [isVisible]);
```

## Troubleshooting

### Common Issues
1. Component not rendering
   - Check imports
   - Verify props
   - Check console errors

2. Styles not applying
   - Check class names
   - Verify CSS imports
   - Check specificity

3. Translations missing
   - Verify key in i18n config
   - Check translation files
   - Verify useTranslation hook

### Debug Tips
1. Use React Developer Tools
2. Check browser console
3. Verify network requests
4. Test in multiple browsers

## Component Checklist

### New Component
- [ ] Proper file structure
- [ ] PropTypes defined
- [ ] Documentation added
- [ ] Translations included
- [ ] Styles created
- [ ] Tests written
- [ ] Accessibility verified
- [ ] Performance optimized

### Component Updates
- [ ] Backward compatibility
- [ ] Documentation updated
- [ ] Tests updated
- [ ] Performance impact checked
- [ ] Browser testing
- [ ] Mobile testing
- [ ] Accessibility maintained