# syntax=docker/dockerfile:1

# =========================================================
# 📚 DEVALLTECT DOCS — MULTI-STAGE CONTAINER
# =========================================================

FROM node:20-bookworm-slim AS dependencies

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
WORKDIR /workspace

RUN corepack enable

RUN apt-get update \
  && apt-get install --yes --no-install-recommends make \
  && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases/ .yarn/releases/

RUN yarn install --immutable


FROM dependencies AS development

COPY . .

EXPOSE 3000

CMD ["yarn", "start", "--host", "0.0.0.0"]


FROM dependencies AS validation

COPY . .

RUN yarn validate


FROM dependencies AS builder

COPY . .

RUN yarn build


FROM nginx:stable-alpine AS production

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/build/ /usr/share/nginx/html/devalltect-docs/

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
