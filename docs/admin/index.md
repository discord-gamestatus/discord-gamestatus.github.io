---
# vim: set tw=0 wm=0:
layout: single
author_profile: false
title: Admin documentation
---

# Bot token
Before setting up the bot you need to create a discord application and generate a bot token.

[Discord.js has a great guide on how to create one](https://discordjs.guide/preparations/setting-up-a-bot-application).

# Installation
There are several ways to self-host the bot.

- [Using docker](./docker) (recommended for new users)
- [Manually](./manual)

# Configuring
_FIXME: outdated_
## Environment variables

```
# Essential
DATABASE_PASS=insecure-pass       # Password to access the postgres database
DISCORD_API_KEY=...               # Your discord bot token from https://discord.com/developers/applications

# Not so essential configuration
GS_PREFIX=!                     # The prefix used for chat commands
GS_ADMIN_FLAG=ADMINISTRATOR     # The permission that qualifies a user as an admin https://discord.js.org/#/docs/discord.js/stable/class/Permissions?scrollTo=s-FLAGS
GS_TICK_COUNT=60                # The number of ticks the bot should use, the status updates are spread across these evenly
GS_TICK_TIME=1000               # The time the bot waits in between each tick
GS_CHANNEL_LIMIT=3              # The limit on status messages in a single channel
GS_GUILD_LIMIT=3                # The limit on status messages in a single guild
GS_SUPPORT_LINK=https://discord.gg/CUefWnZ  # The link displayed in !botinfo
```