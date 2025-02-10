# White-Label Portfolio & SaaS Webapp

A modern, modular, and customizable portfolio webapp built with Next.js and React. This project is designed to be easily white-labeled and extended for SaaS offerings.

## Table of Contents
- [Documentation](#documentation)
- [Quick Start](#quick-start)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Local Development](#local-development)
  - [Docker Development](#docker-development)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Internationalization](#internationalization)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [Acknowledgments](#acknowledgments)

## 📚 Documentation

Detailed documentation can be found in the `docs` directory:

- [Getting Started](docs/getting-started.md)
- [Architecture Overview](docs/architecture.md)
- [Style Guide](docs/style-guide.md)
- [Component Documentation](docs/components.md)
- [White-labeling Guide](docs/white-labeling.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## Key Features
- **Next.js & React:** Modern architecture for your personal brand
- **Dockerized:** Use Docker for local development, building, and testing
- **Static Export:** Export your Next.js app as a static site and deploy to GitHub Pages
- **Multilingual Support:** Powered by `i18next` and `react-i18next` for English and Spanish
- **Modular Components:** Easily white-label the solution for SaaS offerings
- **Responsive Design:** Mobile-first approach ensuring compatibility across all devices
- **Component-Based Architecture:** Modular and reusable components for easy maintenance
- **SEO Optimized:** Built with search engine optimization in mind

## Project Structure
```
├── components/          # React components
│   ├── AboutSection.js     # About section component
│   ├── BlogSection.js      # Blog section component
│   ├── ContactSection.js   # Contact form component
│   ├── Footer.js          # Footer component
│   ├── HeroSection.js     # Hero section component
│   ├── Layout.js          # Main layout wrapper
│   ├── Navbar.js          # Navigation component
│   ├── PortfolioSection.js # Portfolio showcase
│   └── ServicesSection.js  # Services section
├── config/             # Configuration files
│   ├── branding.js       # Branding and theming
│   └── i18n.js          # Internationalization setup
├── pages/              # Next.js pages
├── public/             # Static assets
│   └── images/         # Image assets
├── styles/             # CSS styles
├── docker-compose.yml  # Docker Compose config
├── Dockerfile          # Docker configuration
└── next.config.js      # Next.js configuration
```

## Prerequisites
- Node.js 14.x or later
- npm 6.x or later
- Docker (for containerized development)
- Git

## Technology Stack
- **Frontend Framework:** Next.js (latest)
- **UI Library:** React (latest)
- **Internationalization:** i18next v21.8.15, react-i18next v11.15.3
- **Deployment:** GitHub Pages
- **Containerization:** Docker
- **Version Control:** Git
- **Package Management:** npm

## Getting Started

### Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000)

### Docker Development
1. **Start with Docker Compose:**
   ```bash
   docker-compose up
   ```

2. Visit [http://localhost:3000](http://localhost:3000)

## Configuration

### Next.js Configuration
The project uses custom Next.js configuration in `next.config.js`:
- Base path configured for GitHub Pages deployment
- Asset prefix set for proper resource loading
- Static export configuration enabled

### Environment Variables
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_SITE_URL=your-site-url
NEXT_PUBLIC_GA_ID=your-google-analytics-id (optional)
```

## Deployment

### GitHub Pages Deployment
The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment:**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at `https://<username>.github.io/<repo-name>/`

2. **Manual Deployment:**
   ```bash
   npm run build
   npm run deploy
   ```

### Docker Production Build
```bash
docker build --target production -t my-portfolio-app:production .
docker run -p 80:80 my-portfolio-app:production
```

## Internationalization
- Supported languages: English (default) and Spanish
- Configuration in `config/i18n.js`
- Add translations in `public/locales/{lang}/translation.json`

## Customization

### Branding
Edit `config/branding.js` to customize:
- Color scheme
- Typography
- Logo and images
- Site metadata

### Components
All components in the `components/` directory are modular and can be:
- Reused across pages
- Customized for different use cases
- Extended with additional features

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source and available under the [MIT License](LICENSE).

## Support
For support, please check our [documentation](docs/) or open an issue in the GitHub repository.

## Acknowledgments
- Next.js team for the amazing framework
- React community for the ecosystem
- All contributors and users of this template