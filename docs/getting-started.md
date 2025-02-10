# Getting Started Guide

This guide will help you get up and running with the white-label webapp quickly and efficiently.

## Quick Setup

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- Git
- Docker (optional)

### Installation

1. **Clone the Repository**
```bash
git clone <repository-url>
cd public-figure
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

## First Customization

### 1. Update Branding
Edit `config/branding.js`:
```javascript
export const branding = {
  name: "Your Brand",
  tagline: "Your Tagline",
  logo: "/images/your-logo.svg",
};
```

### 2. Add Your Colors
Edit `styles/globals.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
  --accent-color: #YOUR_COLOR;
}
```

### 3. Update Content
Edit `config/i18n.js` to update text content in your preferred languages.

## Development Workflow

### 1. File Structure
```
components/   # React components
config/       # Configuration files
pages/        # Next.js pages
public/       # Static assets
styles/       # CSS styles
docs/         # Documentation
```

### 2. Key Commands
```bash
# Development
npm run dev     # Start development server

# Testing
npm test        # Run tests

# Building
npm run build   # Build for production
npm run export  # Export static site

# Docker
docker-compose up  # Start with Docker
```

### 3. Component Development

Create a new component:
```jsx
// components/YourComponent.js
import { useTranslation } from 'react-i18next';

const YourComponent = () => {
  const { t } = useTranslation();
  
  return (
    <section className="your-component">
      <h2>{t('your.translation.key')}</h2>
      {/* Your content */}
    </section>
  );
};

export default YourComponent;
```

### 4. Adding Translations

Add new translations to `config/i18n.js`:
```javascript
{
  "en": {
    "your": {
      "translation": {
        "key": "Your Content"
      }
    }
  }
}
```

## Common Tasks

### 1. Adding a New Page

1. Create file in `pages/`:
```jsx
// pages/your-page.js
import Layout from '../components/Layout';

export default function YourPage() {
  return (
    <Layout>
      {/* Your page content */}
    </Layout>
  );
}
```

2. Add to navigation in `components/Navbar.js`

### 2. Styling Components

Add styles to `globals.css`:
```css
.your-component {
  /* Your styles */
}
```

### 3. Adding Images

1. Place images in `public/images/`
2. Reference in components:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

## Docker Development

### 1. Start Development Environment
```bash
docker-compose up
```

### 2. Build Production Image
```bash
docker build -t your-app-name .
```

## Testing

### 1. Component Testing
```jsx
import { render, screen } from '@testing-library/react';
import YourComponent from './YourComponent';

test('renders component', () => {
  render(<YourComponent />);
  expect(screen.getByText('Your Content')).toBeInTheDocument();
});
```

### 2. Run Tests
```bash
npm test
```

## Deployment

### 1. Build for Production
```bash
npm run build
npm run export
```

### 2. Deploy to GitHub Pages
The GitHub Action will automatically deploy when you push to main.

## Troubleshooting

### Common Issues

1. **Missing Dependencies**
   ```bash
   npm install
   ```

2. **Build Errors**
   - Check Node.js version
   - Clear `.next` directory
   - Rebuild node modules

3. **Styling Issues**
   - Check class names
   - Verify CSS imports
   - Clear browser cache

## Next Steps

1. Review [Architecture Documentation](architecture.md)
2. Study [Component Documentation](components.md)
3. Learn about [White-labeling](white-labeling.md)
4. Read [Contributing Guidelines](CONTRIBUTING.md)

## Need Help?

- Check existing documentation
- Search issues on GitHub
- Create a new issue
- Join our community discussions