---
sidebar_position: 2
---

# Configuration

Setting up the Ban Database Bot via Discord commands or our web dashboard.

## Website Configuration

Configure Ban Database via our web dashboard at [bd.madebyatlas.dev](https://bd.madebyatlas.dev), where you will be directed to authenticate via Discord. Only data that is available to us is your username, user id, avatar, and server list. **None of this data is stored unless you set up configuration values, and no data is shared or sold to 3rd parties**. Upon authenticating you are able to select the server you want to configure from the ‘Select Server’ dropdown, servers you share with the bot will show their proper icons and non-mutual servers will display a `+` and allow you to add the bot to the server if you wish. Viewing the server configuration page will have 3 dropdowns, `Mod Role`, `Alert Channel`, and `Mod Action` (*View parameter descriptions on the below*), followed by a button to save inputted values.

## Command Configuration

Configure Ban Database on Discord with the `/config set` command, this will require multiple parameters for configuring; which role will be pinged, what channel will recieve logs, and what (if any) automod action should be carried out.

### Example Command:
`/config set modrole:@Moderator alertchannel:#mod-log modaction:Alert Only`
- This would set **#mod-logs** as the alert channel and would ping **@Moderator** with just an alert and carry out no auto mod action.

# Configuration Parameters
- `modrole` // What role will be pinged in the event of an alert.

- `alertchannel` // What channel alerts/logs will be sent to.

- `modaction` // What action is automatically carried out upon a user who joins and is in the database.