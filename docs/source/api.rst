Atlas API
#########

.. note::

   Our public API is currently under development and has not yet been completed.

.. warning::

   Please note that the following documentation may not accurately reflect the API and its features due to ongoing development.

Endpoints
#####

Base64
=====
``/base64``

Query Parameters
-----
.. list-table:: 
   :widths: 25 25 25
   :header-rows: 1

   * - Parameter
     - Value
     - Other Info
   * - ``mode``
     - ``encode`` ``decode``
     - Not Required, Defaults to ``encode``
   * - ``text``
     - ``Plain text for ``encode``, base64 for ``decode``
     - Required

Example Usage
-----
``https://api.madebyatlas.dev/base64?mode=decode&text=bWNncmlt``
* Output: ``mcgrim``
