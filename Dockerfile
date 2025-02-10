# Stage 1: Build & Export the Next.js app using Node.js
FROM node:18 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app (with output: 'export', this produces the 'out' folder)
RUN npm run build

# Stage 2: Production image – serve static files with Nginx
FROM nginx:alpine AS production
# Copy the exported static site from the builder stage into Nginx's html folder
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
