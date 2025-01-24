# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project for production
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Expose the port your app runs on
EXPOSE 80

# Start the application
CMD ["npm", "run", "start"]