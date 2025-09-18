---
sidebar_position: 2
---

# Configuration

Configuration for Lenny is simple and is all done with the /config command.

The /config command will require multiple parameters for selecting which channel will recieve certain updates. Parameters: `server_updates` `role_updates` `channel_updates` `thread_updates` `emojisticker_updates` `message_updates` `voice_updates` `invite_updates` `member_updates` `guildmember_updates`

# Configuration Parameters
- `server_updates` contains the general logs of the server.
    - What is logged: Name Changes, Icon Changes, Banner Changes, Default Settings Changes

- `role_updates` contains all updates done to a role.
    - What is logged: Role Created, Role Deleted, Role Edited

- `channel_updates` contains all updates done to a channel.
    - What is logged: Channel Created, Channel Deleted, Channel Edited

- `thread_updates` contains all updates done to a thread channel.
    - What is logged: Thread Created, Thread Deleted, Thread Edited

- `emojisticker_updates` contains all updates done to emojis and stickers.
    - What is logged: Emoji Created, Sticker Created, Emoji Deleted, Sticker Deleted

- `message_updates` contains all updates done to a message.
    - What is logged: Message Edited, Message Pinned, Message Published, Message Deleted

- `voice_updates` contains all updates in a voice channel.
    - What is logged: Member Connected, Member Moved, Member Disconnected, Member Streaming, Member Stopped Streaming

- `invite_updates` contains all updates with server invites.
    - What is logged: Invite Created, Invite Deleted/Expired

- `member_updates` contains all updates done to a member.
    - What is logged: Username/Discrim Changed, Avatar Changed

- `guildmember_updates` contains all updates with a guild member.
    - What is logged: Member Joined, Member Left