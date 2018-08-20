#!/usr/bin/env python3

# https://github.com/LonamiWebs/Telethon/tree/master/telethon_examples

import re
from collections import defaultdict
from datetime import datetime, timedelta
from os import environ

from telethon import TelegramClient, events

#"""Uncomment this for debugging
import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug('dbg')
logging.info('info')
#"""


# TG_API_ID and TG_API_HASH *must* exist or this won't run!
session_name = environ.get('TG_SESSION', 'session')
client = TelegramClient(
    session_name, int(environ['TG_API_ID']), environ['TG_API_HASH'],
    proxy=None
)

last_welcome = []

@client.on(events.ChatAction)
async def handler(event):
    if event.user_joined:
        if event.user.id not in last_welcome:
            await event.reply('/tip 1000 CommunityNodeToken')
            await event.reply('/tip 2')
            last_welcome.append(event.user.id)
        else:
            await event.reply('Welcome! http://www.communitynode.org/support/starter')





with client.start():
    print('(Press Ctrl+C to stop this)')
    client.run_until_disconnected()
