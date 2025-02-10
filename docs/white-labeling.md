# White-Labeling Guide

This guide explains how to customize and rebrand the application for different clients or use cases.

## Quick Start

1. Fork or clone the repository
2. Modify `/config/branding.js`
3. Replace assets in `/public/images/`
4. Update theme variables in `styles/globals.css`
5. Deploy your branded version

## Customization Layers

### 1. Basic Branding
```javascript
// config/branding.js
export const branding = {
  name: "Your Brand",
  tagline: "Your Tagline",
  logo: "/images/your-logo.svg",
  // Add more brand-specific configuration
};
```

### 2. Theme Customization

#### Colors
Update CSS variables in `styles/globals.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
  --accent-color: #YOUR_COLOR;
  --text-color: #YOUR_COLOR;
  --background-color: #YOUR_COLOR;
}
```

#### Typography
```css
:root {
  --font-primary: 'Your-Font', sans-serif;
  --font-secondary: 'Your-Secondary-Font', serif;
}
```

### 3. Content Customization

#### Text Content
Modify translations in `config/i18n.js`:
```javascript
{
  "en": {
    "home": {
      "title": "Your Title",
      "subtitle": "Your Subtitle"
    },
    // ... other translations
  }
}
```

#### Images and Assets
1. Replace files in `/public/images/`:
   - logo.svg
   - placeholder1.svg
   - placeholder2.svg
   - placeholder3.svg
   - placeholder4.svg

2. Update image references in components

### 4. Component Customization

#### Layout Modifications
- Customize `components/Layout.js`
- Modify navigation in `components/Navbar.js`
- Update footer in `components/Footer.js`

#### Section Customization
Modify or replace section components:
- HeroSection.js
- AboutSection.js
- ServicesSection.js
- PortfolioSection.js
- BlogSection.js
- ContactSection.js

## Advanced Customization

### 1. Custom Components
Create new components in `/components/custom/`:
```javascript
// components/custom/YourComponent.js
import { branding } from '../../config/branding';

const YourComponent = () => {
  return (
    // Your custom implementation
  );
};
```

### 2. Custom Styles
Create brand-specific stylesheets:
```css
/* styles/brand-specific.css */
.your-brand-specific-class {
  /* Custom styles */
}
```

### 3. Custom Pages
Add new pages in `/pages/`:
```javascript
// pages/custom-page.js
import Layout from '../components/Layout';

const CustomPage = () => {
  return (
    <Layout>
      {/* Your custom page content */}
    </Layout>
  );
};
```

## Configuration Options

### 1. Feature Flags
```javascript
// config/features.js
export const features = {
  enableBlog: true,
  enablePortfolio: true,
  enableContact: true,
  // Add more feature toggles
};
```

### 2. Layout Options
```javascript
// config/layout.js
export const layout = {
  navigationStyle: 'default', // or 'minimal', 'full'
  footerStyle: 'default', // or 'minimal', 'full'
  sectionOrder: ['hero', 'about', 'services', 'portfolio', 'blog', 'contact'],
};
```

### 3. Integration Options
```javascript
// config/integrations.js
export const integrations = {
  analytics: {
    provider: 'google-analytics',
    trackingId: 'YOUR_ID',
  },
  // Add more integrations
};
```

## Deployment Considerations

### 1. Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_BRAND_NAME=Your Brand
NEXT_PUBLIC_API_URL=your-api-url
```

### 2. Build Configuration
Update `next.config.js`:
```javascript
module.exports = {
  basePath: '/your-path',
  // Other configuration
};
```

### 3. Asset Delivery
- Use a CDN for assets
- Optimize images
- Configure caching

## Testing White-Label Implementation

### 1. Visual Testing
- Test across different screen sizes
- Verify brand colors and typography
- Check image replacements
- Validate responsive design

### 2. Content Testing
- Verify translations
- Check dynamic content
- Validate forms
- Test navigation

### 3. Integration Testing
- Test third-party integrations
- Verify analytics
- Check form submissions
- Validate API endpoints

## Best Practices

1. **Maintain Brand Consistency**
   - Use brand colors consistently
   - Follow typography guidelines
   - Maintain spacing patterns
   - Keep consistent UI elements

2. **Performance**
   - Optimize custom assets
   - Minimize custom CSS
   - Lazy load components
   - Monitor performance metrics

3. **Documentation**
   - Document customizations
   - Maintain changelog
   - Update README
   - Add setup instructions

4. **Version Control**
   - Create brand-specific branches
   - Tag releases
   - Document dependencies
   - Maintain upgrade path

## Theme Customization System

### Live Theme Customizer
The application includes a live theme customizer that's available in development mode. This tool allows real-time preview of theme changes:

1. Start the development server (`npm run dev`)
2. Click the palette icon (🎨) on the right side of the screen
3. Use the color pickers to adjust:
   - Primary colors
   - Secondary colors
   - Accent colors

### Theme Testing
We provide comprehensive testing for theme customization:

```bash
# Run end-to-end tests
npm run test:e2e

# Run component tests with Jest
npm run test

# Run Storybook for component development
npm run storybook
```

### Theme Implementation Details

#### CSS Variables
The theme system uses CSS variables for dynamic updates. Key variables include:

```css
--color-primary
--color-secondary
--color-accent
--color-background-primary
--color-background-secondary
--color-text-primary
--color-text-secondary
```

#### Theme Provider
The `ThemeProvider` component manages theme state and provides context throughout the application. Wrap your application with:

```jsx
<ThemeProvider initialTheme={yourTheme}>
  <App />
</ThemeProvider>
```

#### Creating Custom Themes
Use the `createTheme` function to generate custom themes:

```javascript
const customTheme = createTheme({
  colors: {
    primary: '#YOUR_COLOR',
    secondary: '#YOUR_COLOR',
    // ... other color overrides
  },
  // ... other theme property overrides
});
```

## Best Practices for Theme Customization

### 1. Color Palette Guidelines
- Maintain sufficient contrast ratios
- Test color combinations for accessibility
- Consider color blindness variations
- Document color usage patterns

### 2. Theme Migration
When updating existing sites to use the theme system:

1. Identify all hardcoded colors
2. Replace with theme variables
3. Test with multiple themes
4. Verify responsive behavior

### 3. Performance Considerations
- Use CSS variables for dynamic updates
- Minimize theme changes frequency
- Cache theme preferences
- Optimize theme switching animations

### 4. Testing Theme Changes

#### Unit Tests
- Test theme context provider
- Verify theme updates
- Check component rendering with different themes

#### Integration Tests
- Test theme persistence
- Verify theme switching
- Check responsive design

#### End-to-End Tests
- Test theme customizer interface
- Verify visual consistency
- Check performance impact

## Troubleshooting Theme Issues

### Common Problems

1. **Theme Not Applying**
   - Check ThemeProvider implementation
   - Verify CSS variable usage
   - Clear browser cache

2. **Inconsistent Colors**
   - Validate theme object structure
   - Check CSS specificity
   - Verify variable names

3. **Performance Issues**
   - Minimize theme changes
   - Use React.memo for pure components
   - Optimize style updates

## Theme Development Workflow

1. **Local Development**
   - Use Theme Customizer
   - Test with multiple themes
   - Verify responsive design

2. **Theme Testing**
   - Run component tests
   - Check accessibility
   - Verify brand guidelines

3. **Theme Deployment**
   - Document theme changes
   - Update style guide
   - Validate in staging

## Theme Customizer Features

### Available Controls
- Color pickers for primary colors
- Typography adjustments
- Spacing controls
- Layout options

### Saving Themes
- Export theme configuration
- Import saved themes
- Reset to defaults

### Theme Preview
- Real-time updates
- Responsive preview
- Component showcase