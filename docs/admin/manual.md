---
# vim: set tw=0 wm=0: 
layout: single
author_profile: false
toc: true
toc_label: "Installation"
toc_icon: "cog"
toc_sticky: true
title: Manual Install
---

<link rel="stylesheet" href="/assets/css/shell-copy.css">
<script src="/assets/js/shell-copy.js" async></script>

# Notes
- Commands listed (unless otherwise specified) should work on both unix and windows systems.
- This documentation is outdated since version 2

# Pre-requisites

GameStatus is built using discord.js, node.js, and typescript, before you start setting up the bot
there are a few things you need to install first.

## Required
### Node.js
[Download][node] and install the latest (or >= v17) version of node for
your OS.

### PostgreSQL database
A [PostgreSQL][postgres] database is required.

This guide doesn't go into detail but you will need to create a user on the database with:
- `CONNECT` on the database
- `USAGE, SELECT, INSERT, UPDATE, DELETE` on the tables
- `USAGE, SELECT` on sequences

## Optional
### Git
We use [git][git] as our Version Control System, to more easily download the source code and update it
install [git][git] (if you use linux it will be available via your package manager).

# Native (build from source)
## Getting the source code
Before starting navigate to the directory you wish to install the bot using `cd`.

Then to download the source code use [git][git].

```shell
$ git clone https://github.com/discord-gamestatus/discord-gamestatus.git
```

## Installing dependencies
First navigate to the directory you downloaded the source files to.

```shell
$ cd discord-gamestatus
```

The directory should contain a `package.json` file.
```shell
$ ls -l
drwxr-xr-x    - user   2 Jun 01:41 bin
drwxr-xr-x    - user   5 Jun 18:18 scripts
drwxr-xr-x    - user  26 Jun 14:15 src
.rw-r--r--  955 user  26 Jun 14:14 docker-compose.yml
.rw-r--r--  496 user   2 Jun 01:41 Dockerfile
.rw-r--r--  34k user   2 Apr 22:50 LICENSE
.rw-r--r-- 188k user   5 Jun 18:28 package-lock.json
.rw-r--r-- 1.7k user   5 Jun 18:28 package.json
.rw-r--r--  645 user   2 Jun 01:41 README.md
.rwx------  171 user  29 Aug  2021 start.sh
.rw-r--r-- 6.9k user   3 Apr 01:13 tsconfig.json
```

To install the dependencies use NPM ([node's][node] package manager), or some alternative.
```shell
$ npm install
added 256 packages, and audited 257 packages in 6s

49 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Building
As we use typescript you need to transpile the codebase before starting the bot, note: you will need
to do this again each time you edit the source code.

```shell
$ npm run build

> discord-gamestatus@2.1.0 build
> npx tsc
```

## TODO: scheduler
These docs are incomplete for the latest version please use pre 2.1 version.

## Configuring
The bot is configured through a combination of environment variables and CLI parameters (although
you they are mostly interchangeable).

### The important stuff
These environment variables are required to for the bot to start

- Discord API Key
  - `DISCORD_API_KEY=...`
- Database parameters
  - `PG_DATABASE=discord-gamestatus` (name of database)
  - `PGHOST=ip of postgres database`
  - `PGUSER=database user`
  - `PGPASSWORD=database password`

### Setup the database
To configure the database you must run the sql files within scripts/schemas in numerical order.

```shell
$ sudo -u postgres psql -d discord-gamestatus
discord-gamestatus=# \i ./scripts/schemas/1.sql
discord-gamestatus=# \i ./scripts/schemas/2.sql
```

And grant permissions to the user (`;` are important here), replace username "discord-gamestatus"
with the name of the role/user you created.

```shell
discord-gamestatus=# GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO "discord-gamestatus";
discord-gamestatus=# GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO "discord-gamestatus";
```

### Everything else
TODO

```shell
$ node bin/discord-gamestatus --help
This program is licensed under GPL-3.0 a license should be included in LICENSE or can be found at https://github.com/Douile/discord-gamestatus/blob/master/LICENSE
discord-gamestatus: A discord bot that monitors game servers
https://github.com/Douile/discord-gamestatus
Usage:
	-d, --debug			Enable debug logging
	-v, --verbose			Enable verbose logging
	--no-info			Disable info logging
	--no-warn			Disable warning logging
	--no-error			Disable error logging
	--dev				Enable dev mode (monitor files for changes and auto-restart)
	-p [prefix], --prefix [prefix]	Change the command prefix can be any length (--prefix "_")
	--key [key]			Set the discord API key (Use of env var recommended)
	--owner [owner]			Set the bot owner user ID
	--admin [permissions]		Set the guild permissions required to be bot admin
	--dbl-key [key]			Set top.gg API key (Use of env var recommended)
	--tick-count [count]		Set the number of ticks (Each update is assigned a tick so no. ticks is maximum time between a single update)
	--tick-time [time]		Set the time between each tick (in ms)
	--channel-limit [limit]		The max amount of statuses per channel (0 / not set = infinite)
	--guild-limit [limit]		The max amount of statuses per guild (0 / not set = infinite)
	--allow-duplicate-updates	Allow guilds to have multiple statuses for the same IP
	--support [link]		Link to the support server
	-h, --help			Show this help message
```

These can all be configured by environment variable e.g. `GS_TICK_COUNT`

## Starting the bot
Once everything else is done, you're finally ready to start the bot.

```shell
$ node bin/discord-gamestatus
```

[latest]: https://github.com/discord-gamestatus/discord-gamestatus/archive/refs/tags/latest.zip
[node]: https://nodejs.org
[git]: https://git-scm.com/downloads
[postgres]: https://www.postgresql.org/