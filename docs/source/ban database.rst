Ban Database
############

.. note::

   Ban Database is under active development. The docs may not reflect properly with features on Ban Database's current installation.

.. _installation:

Installation
============

To add Ban Database to your server, use one of the following links:

* `Minimum Permissions <https://discord.com/oauth2/authorize?client_id=734511886464188436&permissions=1101659622470&redirect_uri=https://discord.gg/kbvMKAG6jh&response_type=code&scope=bot+applications.commands>`_

* `Administrator Permissions <https://discord.com/oauth2/authorize?client_id=734511886464188436&permissions=8&redirect_uri=https://discord.gg/kbvMKAG6jh&response_type=code&scope=bot+applications.commands>`_


.. _configuration:


Configuration
=============

Configuration for Ban Database is simple and can all done on Discord with the ``/config set`` command, or on our `web dashboard <https://bd.madebyatlas.dev>`_.


Website Configuration
---------------------
Configure Ban Database via our web dashboard at `bd.madebyatlas.dev <https://bd.madebyatlas.dev>`_, where you will be directed to authenticate via Discord. Only data that is available to us is your username, user id, avatar, and server list. **None of this data is stored unless you set up configuration values, and no data is shared or sold to 3rd parties**. Upon authenticating you are able to select the server you want to configure from the 'Select Server' dropdown, servers you share with the bot will show their proper icons and non-mutual servers will display a ``+`` and allow you to add the bot to the server if you wish. Viewing the server configuration page will have 3 dropdowns, ``Mod Role``, ``Alert Channel``, ``Mod Action`` `(View parameter descriptions below)`, followed by a button to save inputted values.

Discord Configuration
---------------------
Configure Ban Database on Discord with the ``/config set`` command, this will require multiple parameters for configuring; which role will be pinged, what channel will recieve logs, and what (if any) automod action should be carried out.

Example Command:
``/config set modrole:@Moderator alertchannel:#mod-log modaction:Alert Only`` - This would set #mod-logs as the alert channel and would ping @Moderator with just an alert and carry out no auto mod action.

Parameters
----------

* ``modrole`` What role will be pinged in the event of an alert.

* ``alertchannel`` What channel alerts/logs will be sent to.

* ``modaction`` What action is automatically carried out upon a user who joins and is in the database.


Commands
========

Commands for Ban Database are seperated into 3 categories; ``General``, ``Database``, and ``Configuration``


General
-------
Basic bot info commands

* ``/help``: *Shows all commands*

* ``/ping``: *Test bot response time*

* ``/invite`` : *Get an invite for Ban Database*
   
* ``/support`` : *Get support for Ban Databasse*

Database
-------
Database system commands

* ``/ban request`` : *Submit request for a user to be added to the database*

* ``/ban info`` : *Check if a user is in the database*

Configuration
-------------
Commands for configuration of Lenny

* ``/config set`` : *Set your server config* (See `Configuration <https://docs.madebyatlas.dev/en/latest/ban%20database.html#configuration>`_)

* ``/config view`` : *View your server config*
