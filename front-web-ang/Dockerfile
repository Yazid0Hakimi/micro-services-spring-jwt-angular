# Step 1: Build the Angular app using Node.js
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the Angular app source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build files from the build stage to Nginx's public directory
COPY --from=build /app/dist/front-web-ang /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
