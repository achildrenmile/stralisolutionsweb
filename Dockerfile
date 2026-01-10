# Build stage for React app
FROM node:22.12-alpine AS build

WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the React app using Vite (without react-snap)
RUN npm run build:no-snap

# Production stage for Node.js server
FROM node:22.12-alpine

WORKDIR /app

# Install wget for health check
RUN apk add --no-cache wget

# Copy package files for server dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy the server code
COPY server.js ./

# Copy the built React app from the build stage
COPY --from=build /app/dist ./dist

# Create directory for customer queries and set permissions
RUN mkdir -p /app/data && chown -R node:node /app

# Run as non-root user
USER node

# Expose the port
EXPOSE 8080

# Set environment variable for port
ENV PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Start the Node.js server
CMD ["node", "server.js"]