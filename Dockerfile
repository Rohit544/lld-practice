# --- Stage 1: Build ---
FROM node:24.13.0-alpine AS builder
WORKDIR /app
ENV YARN_NODE_LINKER=node-modules
RUN corepack enable && corepack prepare yarn@4.11.0 --activate

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# --- Stage 2: Run ---
FROM node:24.13.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy everything from builder to keep it simple for now
COPY --from=builder /app /app

EXPOSE 3000
CMD ["node", "src/main.js"]
