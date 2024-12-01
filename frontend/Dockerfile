# Frontend Dockerfile
FROM node:18 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy Angular source code to the container
COPY frontend/ .

# Build the Angular app in production mode
RUN npm run build -- --configuration production

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy built Angular files to Nginx's default public folder
COPY --from=build /usr/src/app/dist/frontend/browser /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
