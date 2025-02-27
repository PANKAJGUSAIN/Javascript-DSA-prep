# Use node.js 20 docker image 
FROM node:20

# Create working directory
WORKDIR /dockertest/src/main 

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]