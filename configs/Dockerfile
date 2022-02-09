FROM node:14.17.0-slim as builder
RUN apt-get update \
    && apt-get install -y git --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge -y --auto-remove git
RUN mkdir /app
COPY ./dist /app

FROM node:14.17.0-alpine
LABEL author=xavier@officeriders.com
RUN \
    apk add --update \
    python3 \
    python3-dev \
    py-pip \
    build-base \
    && \
    pip install dumb-init && \
    apk del \
    python3 \
    python3-dev \
    py-pip \
    build-base \
    && \
    rm -rf /var/cache/apk/*
USER node
COPY --chown=node:node --from=builder /app /app
CMD ["dumb-init", "node", "app.js"] 
# "--enable-source-maps", 
WORKDIR /app
EXPOSE 4001/tcp
