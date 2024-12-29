
FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Copy the rest of your application code.
COPY . .

# Expose the port your app runs on.
EXPOSE 5000

# Command to run your app.
CMD ["npm", "start"]