---
layout: single
author_profile: false
toc: true
toc_label: "Documentation"
toc_icon: "cog"
title: User documentation
---

<link rel="stylesheet" href="https://cdn.rawgit.com/Douile/discord-visualizer/master/css/discord.css">

# Getting started

## 1. Create your status

Find the short name for your game by searching with the gamelist command (the name you need is
after the =).

{% discord [
  {"username": "You","content":"!gamelist Counter-strike","bot":false},
  {"username": "Discord Gamestatus",
  "avatar_url":"https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"6 Available games",
    "fields": [{"value":"Counter-Strike 1.5 (2002) = `cs15`\nCounter-Strike 1.6 (2003) = `cs16`\nCounter-Strike: 2D (2004) = `cs2d`\nCounter-Strike: Condition Zero (2004) = `cscz`\nCounter-Strike: Source (2004) = `css`\nCounter-Strike: Global Offensive (2012) = `csgo`"}],
    "footer": { "text": "1" },
    "color": 5592575  
  }}
] %}

Create the status message by specifying the game name you just found and the IP of your server (you
may also need to specify a port after your IP using a colon: IP:PORT).
{% discord [
  {"username": "You","content":"!status csgo 10.150.150.150","bot":false},
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

Once the message is created it will update every few minutes.

## 2. Customise your status

You can get a list of the currently active statuses in your server using the statusmod command.

{% discord [
  {"username": "You", "bot": false, "content": "!statusmod"},
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

This links you to the active message, and tells you what each statuses' ID is (#ID). Using this ID
you can view the settings for each status.

{% discord [
  {"username": "You", "bot": false, "content": "!statusmod 0"},
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
You can modify any of these values using the statusmod command.

{% discord [
  {"username":"You","bot":false,"content":"!statusmod 0 title New\nTitle"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": { 
    "color": 5592575,
    "title": "#0",
    "description": "SERVER NAME [`IP`]\nhttps://discordapp.com/channels/484737965386366979/722100887941677156/963350271407312896\nSet `title=New\nTitle`\n_Changes will not take effect until after the status has updated_"
  }}
] %}

For more details see [statusmod](#statusmod).

# Commands
## help
List available commands or get help with a specific command.

{% discord [
  {"username":"You","bot":false,"content":"!help"},
  {"username":"Discord Gamestatus",
  "avatar_url": "https://cdn.discordapp.com/avatars/659050996730822665/c85a9ca07b5706a0c37cc433c7549b5d.webp?size=80",
  "embed": {
    "title":"Help",
    "color": 5592575,
    "description":"`!botinfo`\n`!gamelist`\n`!help`\n`!limits`\n`!status`\n`!statusclear`\n`!statusmod`\n`!statusrefresh`\n`!statusremove`\n`!tickdebug`",
    "footer": {"text":"Use \"!help commandName\" for detailed help"}
  }},
  {"content":"You","bot":false,"content":"!help info"},
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
  {"username": "You","content":"!gamelist Counter-strike","bot":false},
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


## statusmod
## statusremove
## statusclear
## statusrefresh
## limits
## botinfo
