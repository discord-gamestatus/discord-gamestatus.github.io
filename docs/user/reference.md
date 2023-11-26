---
# vim: set tw=0 wm=0: 
layout: single
author_profile: false
toc: true
toc_label: "Commands"
toc_icon: "cog"
toc_sticky: true
title: Command reference
---

<link rel="stylesheet" href="https://cdn.rawgit.com/Douile/discord-visualizer/master/css/discord.css">

## help
List available commands or get help with a specific command.

{% discord [
  {"username":"You","bot":false,"content":"/help"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"Help",
    "color": 5592575,
    "description":"`!botinfo`\n`!gamelist`\n`!help`\n`!limits`\n`!status`\n`!statusclear`\n`!statusmod`\n`!statusrefresh`\n`!statusremove`\n`!tickdebug`",
    "footer": {"text":"Use \"!help commandName\" for detailed help"}
  }},
  {"content":"You","bot":false,"content":"/help `command:info`"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"Help",
    "color": 5592575,
    "fields": [
      {"name":"!botinfo","value":"Output runtime information"}
    ]
  }}
] %}

## gamelist
Output the list of games available, searchable with any text

{% discord [
  {"username": "You","content":"/gamelist `game:Counter-strike`","bot":false},
  {"username": "Discord Gamestatus",
  "avatar_url":"https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"6 Available games",
    "fields": [{"value":"Counter-Strike 1.5 (2002) = `cs15`\nCounter-Strike 1.6 (2003) = `cs16`\nCounter-Strike: 2D (2004) = `cs2d`\nCounter-Strike: Condition Zero (2004) = `cscz`\nCounter-Strike: Source (2004) = `css`\nCounter-Strike: Global Offensive (2012) = `csgo`"}],
    "footer": { "text": "1" },
    "color": 5592575
  }}
] %}

## status
Create a status message that updates automatically in the current channel.


{% discord [
  {"username": "You","content":"/status `game:csgo` `ip:10.150.150.150:27015`","bot":false},
  {"username": "Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title": "SERVER NAME",
    "description": "Playing MAP with X/Y players\nConnect with [steam://connect/10.150.150.150](steam://connect/10.150.150.150)",
    "fields": [
      {"value": "Player 1\nPlayer 4", "inline": true},
      {"value": "Player 2", "inline": true},
      {"value": "Player 3", "inline": true}
    ],
    "footer": {"text":"⚪"}
  }}
] %}

You may get an error that the server is unreachable:

{% discord [
  {"username": "Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "content": "The server (`10.150.150.150:27015`) was offline or unreachable"
  }
] %}

This means the bot was unable to contact the IP you specified and fetch the server info, if this
happens check that:
- You are using the correct game
- The server is online
- The server has queries enabled
- The query port you specified is correct
- You can connect to your server normally
- You cannot query the server yourself using gamedig (see below; requires nodejs)

```shell
mkdir gamedig
cd gamedig
npm init -y
npm install gamedig
npx gamedig --debug --type GAME IP
# Example: npx gamedig --debug --type csgo 10.150.150.150:27015
```

If none of these fix the issue and the gamedig query fails ask for support in our discord server.

## statusmod
List/View/Modify status message settings.

### List status messages in current guild

{% discord [
  {"username": "You", "bot": false, "content": "/statusmod list"},
  {"username": "Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title": "1 Active statuses", 
    "fields": [
      {"name": "#0","value":"SERVER NAME [`IP`]\nhttps://discordapp.com/channels/484737965386366979/722100887941677156/963350271407312896"}
    ],
    "color": 5592575  
  }}
] %}

### View settings for a status

{% discord [
  {"username": "You", "bot": false, "content": "/statusmod get `status-id:0`"},
  {"username": "Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title": "#0",
    "description": "SERVER NAME [`IP`]\nhttps://discordapp.com/channels/484737965386366979/722100887941677156/963350271407312896",
    "color": 5592575,
    "fields": [
      {"name":"title","value":"```json\n\"{name}\"\n```","inline":true},
      {"name":"offlineTitle","value":"```json\n\"{name}\"\n```","inline":true},
      {"inline":false,"name":" "},
      {"name":"description","value":"```json\n\"Playing {map} with {numplayers}/{maxplayers} players\\nConnect with {connect}\"\n```","inline":true},
      {"name":"offlineDescription","value":"```json\n\"Server is offline\"\n```","inline":true},
      {"inline": false,"name":" "},
      {"name":"color","value":"```json\n2659522\n```","inline":true},
      {"name":"offlineColor","value":"```json\n16711680\n```","inline":true},
      {"inline": false,"name":" "},
      {"name":"connectUpdate","value":"```json\nfalse\n```","inline":true},
      {"name":"disconnectUpdate","value":"```json\nfalse\n```","inline":true},
      {"inline": false,"name":" "},
      {"name":"columns","value":"```json\n3\n```","inline":true},
      {"name":"maxEdits","value":"```json\n900000\n```","inline":true},
      {"name":"dots","value":"```json\n[\"⚪\",\"⚫\"]\n```","inline":true}
    ]
  }}
] %}

### Modify setting for a status

{% discord [
  {"username":"You","bot":false,"content":"/statusmod set `status-id:0` `setting:title` `value:New\nTitle`"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": { 
    "color": 5592575,
    "title": "#0",
    "description": "SERVER NAME [`IP`]\nhttps://discordapp.com/channels/484737965386366979/722100887941677156/963350271407312896\nSet `title=New\nTitle`\n_Changes will not take effect until after the status has updated_"
  }}
] %}

### Reset a setting

### Settings values

| setting | description |
| :-----: | :---------- |
| `title`, `offlineTitle`, `description`, `offlineDescription` | Take generic text, dynamic content can be added by using [formatting specifiers](#formatting-specifiers) (for multiple lines use shift+enter) |
| `color`, `offlineColor` | Take RGB color values as decimal (red = 16711680) or hex (red = 0xff0000) |
| `connectUpdate`, `disconnectUpdate` | Accepts true or false |
| `columns` | Takes a number for the number of player name columns, set to 0 to disable player names |
| `maxEdits` | _deprecated_ |
| `dots` | Takes space separated list of dots |

### Formatting specifiers

| specifier | description |
| :-------: | :---------- |
| `{name}`  | Name of the server (as reported by server query) |
| `{map}`   | Name of the active map |
| `{numplayers}` | Number of players reported by query |
| `{validPlayers}` | Number of players that will be displayed in player list |
| `{maxplayers}` | Player limit |
| `{connect}` | Generated URL to connect to server or the server IP |

## statusremove
Delete a specific status update by replying to the message containing it or by specifying the ID.

TODO: Reply example

You can find the channel/message ID by enabling developer mode in Discord's settings then right
clicking the channel/message and selecting Copy ID.

{% discord [
  {"username":"You","bot":false,"content":"/statusremove `channel:<#channel>` `message:1157618316907663381`"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed":{
    "title": "Done",
    "description": "The status message has been removed",
    "color": 5592575
  }}
] %}

## statusclear
Delete all status messages in the current channel.

{% discord [
  {"username":"You","bot":false,"content":"/statusclear"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "content":"1 Status updates have been cleared"
  }
] %}

## statusrefresh
Force the bot to send a new status message for all those that are configured in the current channel
(it will also attempt to delete the old messages).

{% discord [
  {"username":"You","bot":false,"content":"/statusrefresh"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title": "Done",
    "description":"Refreshed 1 updates",
    "color": 5592575
  }}
] %}

## limits
View (and refresh) the limits for the current server (or yourself if sent via DM).

{% discord [
  {"username":"You","bot":false,"content":"/limits"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "author": {"name":"You","icon_url":"https://cdn.discordapp.com/embed/avatars/0.png"}, 
    "fields": [
      {"name":"channelLimit","value":"5","inline":true},
      {"name":"guildLimit","value":"5","inline":true}
    ],
    "color": 5592575
  }}
] %}

The limits shown above state that you can have a maximum of 5 messages per channel and 5 messages
per guild.

## botinfo
Get information about the bot.

{% discord [
  {"username":"You","bot":false,"content":"/botinfo"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"discord-gamestatus info",
    "description":"[discord-gamestatus v1.15.3](https://github.com/discord-gamestatus/discord-gamestatus) [Report bugs here](https://github.com/discord-gamestatus/discord-gamestatus/issues)\n[Join the support server](https://discord.gg/CUefWnZ)\nAverage ping: 103ms\nUptime: 8 hours 58 minutes 5 seconds\nWorking in 2239 guilds\nMemory usage: 265857kb/307892kb\n**Dependencies**\n[NodeJS v17.8.0](https://nodejs.org)\n[discord.js-light](https://github.com/timotejroiko/discord.js-light)\n[discord.js](https://github.com/discordjs/discord.js)\n[gamedig](https://github.com/gamedig/node-gamedig)",
    "color": 5592575
  }}
] %}
