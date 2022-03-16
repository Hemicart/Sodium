FROM node:16-alpine as build-frontend

WORKDIR /frontend
COPY . .
RUN ["npm", "ci"]
RUN ["npm", "run", "build"]



FROM node:16-alpine

WORKDIR /app
COPY --from=build-frontend /frontend/dist /dist
COPY backend/package*.json ./
RUN ["npm", "ci"]
COPY backend/* ./
EXPOSE 8080
CMD ["node", "./app.js"]