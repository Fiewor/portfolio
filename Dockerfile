# ---------- Build stage ----------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency definitions first (better caching)
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy source code
COPY . .

# Build static assets
RUN npm run build


# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Add custom nginx config for Cloud Run, gzip, and SPA support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Cloud Run expects
EXPOSE 8080

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
