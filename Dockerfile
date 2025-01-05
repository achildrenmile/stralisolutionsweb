# Dockerfile

# Build stage for React app
FROM node:22.12-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the source code
COPY . .

# Build the React app using Vite
RUN npm run build

# Production stage for Node.js server
FROM node:22.12-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for server dependencies
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the server code
COPY server.js ./

# Copy the built React app from the build stage
COPY --from=build /app/dist ./dist

# Expose the port the Node.js server will listen on
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]