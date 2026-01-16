# Stage 1: Build the React app
FROM node:24-alpine3.23 AS build
WORKDIR /app
COPY package*.json ./
# Install dependencies (This will be slow on your connection)
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]