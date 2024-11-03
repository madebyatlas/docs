Lenny
#####

.. note::

   Lenny is under active development. The docs may not reflect properly with features on Lenny's current installation.

.. _installation:

Installation
============

To add Lenny to your server, use one of the following links:

`Minimum Permissions <https://discord.com/oauth2/authorize?client_id=628758625875394561&permissions=2199024288960&redirect_uri=https://discord.gg/kbvMKAG6jh&response_type=code&scope=bot+applications.commands>`_

`Administrator Permissions <https://discord.com/oauth2/authorize?client_id=628758625875394561&permissions=8&redirect_uri=https://discord.gg/kbvMKAG6jh&response_type=code&scope=bot+applications.commands>`_


.. _configuration:


Configuration
=============

Configuration for Lenny is simple and is all done with the ``/config`` command.

The ``/config`` command will require multiple parameters for selecting which channel will recieve certain updates.
Parameters: ``server_updates`` ``role_updates`` ``channel_updates`` ``thread_updates`` ``emojisticker_updates`` ``message_updates`` ``voice_updates`` ``invite_updates`` ``member_updates`` ``guildmember_updates``


Parameters
----------

* ``server_updates`` contains the general logs of the server.
   What is logged: Name Changes, Icon Changes, Banner Changes, Default Settings Changes

* ``role_updates`` contains all updates done to a role.
   What is logged: Role Created, Role Deleted, Role Edited

* ``channel_updates`` contains all updates done to a channel.
   What is logged: Channel Created, Channel Deleted, Channel Edited

* ``thread_updates`` contains all updates done to a thread channel.
   What is logged: Thread Created, Thread Deleted, Thread Edited

* ``emojisticker_updates`` contains all updates done to emojis and stickers.
   What is logged: Emoji Created, Sticker Created, Emoji Deleted, Sticker Deleted

* ``message_updates`` contains all updates done to a message.
   What is logged: Message Edited, Message Pinned, Message Published, Message Deleted

* ``voice_updates`` contains all updates in a voice channel.
   What is logged: Member Connected, Member Moved, Member Disconnected, Member Streaming, Member Stopped Streaming

* ``invite_updates`` contains all updates with server invites.
   What is logged: Invite Created, Invite Deleted/Expired

* ``member_updates`` contains all updates done to a member.
   What is logged: Username/Discrim Changed, Avatar Changed

* ``guildmember_updates`` contains all updates with a guild member.
   What is logged: Member Joined, Member Left


Commands
========

Commands for Lenny are seperated into 4 categories; ``General``, ``Logging (log)``, ``Information (info)``, and ``Configuration (config)``


General
-------

Basic bot info commands

* **``/help``** **: Shows help message**

* ``/ping`` **: Test bot response time**

* **``/uptime``** : Check bot runtime

* ** ``/stats`` ** : Get stats about the bot

* ``/invite`` : Get an invite to Lenny
   
* ``/premium`` : Get info about Lenny premium
   -

Logging
-------

Logging system commands

* ``/auditlog``
   *Shows recent audit log entries*

* ``/snipe``
   *Shows last deleted message*

Information
-----------

Basic information commands

``/userinfo`` : *Get info about a user*

``/serverinfo`` : *Get info about the current server*

``/channelinfo`` : *Get info about a channel*

``/roleinfo`` : *Get info about a role*

``messageinfo`` : *Get info about a message (Message Menu Command)*

Configuration
-------------

Commands for configuration of Lenny

``/config`` : *Setup logging channels* (See `Configuration <https://docs.madebyatlas.dev/en/latest/lenny.html#configuration>`_)

``/confighelp`` : *Get specific info on log types*

``/configview`` : *View stored config data*

``/configclear`` : *Clears stored config data*
