# Aldo Ruiz Luna Portfolio & White-Label SaaS Webapp

This project is a robust, modular personal brand and portfolio webapp built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/). It is designed to be containerized with Docker for both local development and static export for deployment on GitHub Pages.

## Key Features

- **Next.js & React:** Modern architecture for your personal brand.
- **Dockerized:** Use Docker for local development, building, and testing.
- **Static Export:** Export your Next.js app as a static site and deploy to GitHub Pages.
- **Multilingual Support:** Powered by `i18next` and `react-i18next` for English and Spanish.
- **Modular Components:** Easily white-label the solution for SaaS offerings.

## Docker Usage

### Local Development

Use Docker Compose to run the Next.js development server in a container.

```bash
docker-compose up
```

Then visit [http://localhost:3000](http://localhost:3000) to view your app.

### Building & Running the Production Container

To build the production container (which serves your static export via Nginx):

```bash
docker build --target production -t my-portfolio-app:production .
docker run -p 80:80 my-portfolio-app:production
```

Then visit [http://localhost](http://localhost) to see the static site.

## GitHub Actions Deployment

This repository is set up to build your static export using Docker and deploy it to GitHub Pages automatically. When you push to the `main` branch, the GitHub Actions workflow:

1. Builds the Docker image (using the builder stage).
2. Extracts the static export from the container.
3. Deploys the exported site to the `gh-pages` branch via the [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) action.

Your site will then be available at:

```
https://<your-username>.github.io/<your-repo>/
```

## Getting Started Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies (if needed locally):**

   ```bash
   npm install
   ```

3. **Run using Docker Compose (for development):**

   ```bash
   docker-compose up
   ```

4. **Build and Export:**

   ```bash
   docker build --target builder -t my-portfolio-app:builder .
   docker run --rm my-portfolio-app:builder npm run export
   # The exported site will be in the `out` folder.
   ```

5. **Deploy to GitHub Pages:**

   The GitHub Actions workflow handles deployment automatically when you push changes to `main`.

## License

This project is open source and available under the [MIT License](LICENSE).