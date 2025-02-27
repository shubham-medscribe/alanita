# Use Node.js 20 Alpine as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies (ensure tailwindcss is installed)
RUN npm install

# Copy the entire project after dependencies are installed
COPY . .

# Build the project
RUN npm run build

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]