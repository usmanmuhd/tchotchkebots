# tchotchkebots
API bots that distribute cryptocurrency in conjunction with the goseedit bot


Our project distributes cryptocurrency starter kits (a.k.a. 'tchotchkes') to people who join our telegram and twitter. 


TELEGRAM
We run a python API script that uses the Telethon library to issue replies when someone joins the group. 

On Telegram, the goseedit bot works via a reply and the syntax "/tip 2" or "/tip 1000 CommunityNodeToken"


TWITTER
On Twitter it will run node.js and use the twit library. 

On Twitter, the goseedit bot works via a mention and can include multiple recipients. It should group multiple requests so as to not flood the API. We will have the bot issue a tchotchke whenever someone follows @Community_Node and may also include daily giveaways whenever the word of the day is mentioned.