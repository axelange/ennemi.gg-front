FROM ubuntu:22.04

RUN set -ex; \
    apt-get update; \
    apt-get install -y curl; \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash -; \
    apt install -y nodejs

RUN npm install -g yarn

ARG USER_ID=1000
ARG GROUP_ID=1000
RUN addgroup --gid $GROUP_ID developer
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID developer
USER developer

WORKDIR /app

COPY entrypoint.sh /app/

EXPOSE 3000
ENTRYPOINT [ "/app/entrypoint.sh" ]

CMD ["yarn", "dev"]
