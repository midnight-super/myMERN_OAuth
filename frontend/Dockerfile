# Use the official Node.js image.
FROM node:20

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of your application code.
COPY . .

# Build the React app.
RUN npm run build

# Install serve to serve the static files.
RUN npm install -g serve

# Expose the port your app runs on.
EXPOSE 3000

# Command to serve the app.
CMD ["serve", "-s", "build"]