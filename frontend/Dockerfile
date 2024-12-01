# Frontend Dockerfile
FROM node:18 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend code to the container
COPY frontend/ .

# Build the Angular app
RUN npm run build -- --prod

# Serve the app using an Nginx server
FROM nginx:alpine

# Copy the Angular build files to Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
