FROM node:18-alpine as builder

WORKDIR /app

# 1. Declare and set ARG for the build
ARG VITE_API_URL
# 2. Export it as an environment variable so Vite sees it
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install

COPY . .

# 3. Now when you run "npm run build", Vite will see the VITE_API_URL
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
