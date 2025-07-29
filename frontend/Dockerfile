# Use official Node.js image as base
FROM node:20-alpine

# Set work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy frontend source code
COPY . /app/

# Build frontend
RUN npm run build

# Expose port 5173 (optional, if serving with vite preview)
EXPOSE 5173

# Default command to serve built files (optional)
# You can serve the built files with a simple static server if needed
# CMD ["npx", "serve", "-s", "dist"]
