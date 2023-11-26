---
# vim: set tw=0 wm=0: 
layout: single
author_profile: false
toc: true
toc_label: "Installation"
toc_icon: "cog"
toc_sticky: true
title: Docker Install
---

<link rel="stylesheet" href="/assets/css/shell-copy.css">
<script src="/assets/js/shell-copy.js" async></script>

# Notes
- Commands listed (unless otherwise specified) should work on both unix and windows systems.
- I would recommend you use [podman][podman] (in rootless mode) instead of [docker][docker] for the
  best security (Simply swap `docker` in commands for `podman`; e.g. `podman-compose`). However docker
  is easier to setup. The commands listed here should work for both.

# Install docker
This varies based on OS but for debian based distros:

_Only works on debian based linux OS_
```shell
# apt-get update
# apt-get install docker docker-compose
```

More info can be found on the [docker website][docker].

# Clone the repo
To fetch the source-code we need to download the git repo:

You can use the git command:
```shell
$ git clone https://github.com/discord-gamestatus/discord-gamestatus.git
$ cd discord-gamestatus
$ git checkout latest
```

Or download a zip: [https://github.com/discord-gamestatus/discord-gamestatus/archive/refs/tags/latest.zip][latest].

# Setup a configuration
The bot requires some base configuration to work.

- Copy the `.env.example` file to `.env`
- Edit the `.env` file to configure the bot, make sure to add:
  - Your `DISCORD_API_KEY` ([Info on how to get here](../#bot-token))
  - A random password for `DATABASE_PASS`
  - Other configuration options can be found [here](../#configuring)

_linux only_
```shell
$ cp .env.example .env
$ nano .env
```

# Start the bot
When you start the bot for the first time it will download the required programs and also setup the database, this will cause the first start to take longer than normal.

The following command will start the database, scheduler, and bot and run them all in the background.
```shell
$ docker-compose up -d
```

You can view the logs with
```shell
$ docker-compose logs
```

And stop everything with
```shell
docker-compose down
```

## Aside: building the docker images
By default docker will download the latest version of the docker images, however in some cases you may want to build your own images if
for example you have made local changes to the code or you want to use features that haven't been released yet.

To build your own docker images edit the `docker-compose.yml` file, each service has a `image` and `build` [¹](docker-compose-docs) configuration, to build your own image you want to comment the `image` configuration and uncomment the `build`.

Example:
```yaml
services:
  bot:
#    image: "gamestatus/gamestatus-bot"
    build:
      context: "."
      dockerfile: "./docker/Dockerfile.bot"
```

You can then build the images using:
```shell
$ docker-compose build
```

You don't need to swap all of these you can choose which parts of the bot you want to build and which you want to download.

If you already ran the bot before building you may need to add the `--force-recreate` argument to `docker-compose up` to use the new image.

[latest]: https://github.com/discord-gamestatus/discord-gamestatus/archive/refs/tags/latest.zip
[git]: https://git-scm.com/downloads
[postgres]: https://www.postgresql.org/
[docker]: https://docker.io/
[podman]: https://podman.io/
[docker-compose-docs]: https://docs.docker.com/compose/compose-file/compose-file-v3/#build