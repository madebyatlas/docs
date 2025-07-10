Atlas API
#########

.. note::

   Our public API is currently under development and has not yet been completed.

.. warning::

   Please note that the following documentation may not accurately reflect the API and its features due to ongoing development.

Endpoints
=====

================================

Base64
-----
``/base64`` // Encode or decode base64

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``mode``
     - ``encode`` ``decode``
     - Not Required, Defaults to ``encode``
   * - ``text``
     - Plain text for ``encode``, base64 for ``decode``
     - Required

Example Usage
~~~~~
``https://api.madebyatlas.dev/base64?mode=decode&text=bWNncmlt``

* Output: ``{"mode":"decode","input":"bWNncmlt","result":"mcgrim"}``

================================

Colors
-----
``/colors`` // Get dominant colors from an image

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``image``
     - ``<link>``
     - Required

Example Usage
~~~~~
``https://api.madebyatlas.dev/colors?image=https://i.imgur.com/WJnuC0v.png``

* Output: ``{"dominantColor":{"name":"Mine Shaft","hex":"#2F3136","rgb":[47,49,54]}}``

================================

Crop
-----
``/crop`` // Crop and adjust an image

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``style``
     - ``circle`` ``oval`` ``rectangle`` ``verticalrectangle`` ``pentagon`` ``hexagon`` ``octagon``
     - Required
   * - ``image``
     - ``<link>``
     - Required
   * - ``rotation``
     - ``<number>``
     - Not Required, Defaults to 0°
   * - ``scale``
     - ``<number>``
     - Not Required, Defaults to 1.0

Example Usage
~~~~~
``https://api.madebyatlas.dev/crop?style=octagon&image=https://i.imgur.com/BAfjBqz.png``

* Output: ``Image``

================================

Filters
-----
``/filters/:type`` // Apply filter to an image

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``:type``
     - ``red`` ``green`` ``blue`` ``grayscale`` ``blur`` ``pixelate``
     - Required
   * - ``image``
     - ``<link>``
     - Required

Example Usage
~~~~~
``https://api.madebyatlas.dev/filters/pixelate?image=https://i.imgur.com/WJnuC0v.png``

* Output: ``Image``

================================

Overlays
-----
``/overlays/:type`` // Add an overlay to an image

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``:type``
     - ``wanted`` ``wasted`` ``vicroyale``
     - Required
   * - ``image``
     - ``<link>``
     - Required

Example Usage
~~~~~
``https://api.madebyatlas.dev/overlays/wasted?image=https://i.imgur.com/WJnuC0v.png``

* Output: ``Image``

================================

Password
-----
``/password`` // Generate a password

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``uppercase``
     - ``true`` ``false``
     - Not Required, Defaults to ``true``
   * - ``lowercase``
     - ``true`` ``false``
     - Not Required, Defaults to ``true``
   * - ``numbers``
     - ``true`` ``false``
     - Not Required, Defaults to ``true``
   * - ``symbols``
     - ``true`` ``false``
     - Not Required, Defaults to ``false``
   * - ``length``
     - ``<number 1-1000>``
     - Not Required, Defaults to ``12``
   * - ``count``
     - ``<number 1-10>``
     - Not Required, Defaults to ``1``

Example Usage
~~~~~
``https://api.madebyatlas.dev/password?length=20&count=2&uppercase=false&symbols=true``

* Output: ``{"passwords":["1u(?=r%{5+8f%7{_6:j6","8c)v2:x5vi27|g=^@[&y"]}``

================================

Welcome Image
-----
``/welcome/:background/:format`` // Generate a Discord welcome image

Query Parameters
~~~~~
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Query
     - Value
     - Other Info
   * - ``:background``
     - ``bmw`` ``cliff`` ``gaming`` ``minecraft`` ``skyline`` ``sunset``
     - Required
   * - ``:format``
     - ``1`` ``2`` ``3`` ``4``
     - Required
   * - ``username``
     - ``<text>``
     - Required for all formats
   * - ``avatar``
     - ``<link>``
     - Required for formats 2-4
   * - ``servername``
     - ``<text>``
     - Required for formats 3-4
   * - ``membercount``
     - ``<number>``
     - Required for format 4

Example Usage
~~~~~
``https://api.madebyatlas.dev/welcome/cliff/2?username=McGRiM&avatar=https://i.imgur.com/BAfjBqz.png``

* Output: ``Image``
