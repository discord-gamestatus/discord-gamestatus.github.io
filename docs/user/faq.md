---
# vim: set tw=0 wm=0: 
layout: single
author_profile: false
toc: true
toc_label: "FAQ"
toc_icon: "cog"
toc_sticky: true
title: FAQ
---

<link rel="stylesheet" href="/assets/css/shell-copy.css">
<script src="/assets/js/shell-copy.js" async></script>

# Why does the bot show my server as offline?

If it says ip was offline or unreachable, you are either using a non-standard port, some firewall is blocking the request or you have queries disabled on your server.

1. Check you are using the correct query port
2. Check that queries are enabled in your server config
3. Check you can connect to your server normally
4. Check queries aren't firewalled by using gamedig to query server (make sure gametype and serverip are the same as you provide to the bot)

```shell
$ mkdir gamedig
$ cd gamedig
$ npm init -y
$ npm install gamedig
$ npx gamedig --debug --type gametype serverip
```

# Will game X be added?

Server querying is handled by the library node-gamedig, you can check what games are planned on being added here [https://github.com/gamedig/node-gamedig/issues](https://github.com/gamedig/node-gamedig/issues). If a game you want to be added cannot be found in issues feel free to open one, or add suport yourself.
NOTE: A lot of games use valve protocol, so even if it isn't mentioned in gamelist you may be able to query it by setting another valve game (e.g. csgo) and a port after your IP.

# How often does the status message update?

This can be changed by the bot operator, but on the public bot it is currently every 2 minutes.

# How do I host my own bot?

Read our [admin documentation](../../admin/).