# Backend Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy backend code to the container
COPY backend/ .

# Expose the port the backend runs on (e.g., 3000)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
