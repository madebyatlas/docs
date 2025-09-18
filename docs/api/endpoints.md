---
sidebar_position: 1
---

import ApiEndpoint from '@site/src/components/ApiEndpoint';

# Endpoints

:::note

   Our public API is currently under development and has not yet been completed.

:::

:::warning

   Please note that the following documentation may not accurately reflect the API and its features due to ongoing development.
:::

## Base64

<ApiEndpoint method="GET" path="/base64" />
Encode or decode base64

## Query Parameters
| Query  | Value                                        | Other Info                       |
|--------|----------------------------------------------|----------------------------------|
| `mode` | `encode` `decode`                            | Not Required, Defaults to `encode` |
| `text` | Plain text for `encode`, base64 for `decode` | Required                         |

### Example Usage

<ApiEndpoint method="GET" path="/base64?mode=decode&text=bWNncmlt" />

* Output: ``{"mode":"decode","input":"bWNncmlt","result":"mcgrim"}``

================================

## Colors

<ApiEndpoint method="GET" path="/colors" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `image` | `<link>` | Required |

### Example Usage

<ApiEndpoint method="GET" path="/colors?image=https://i.imgur.com/WJnuC0v.png" />

* Output: ``{"dominantColor":{"name":"Mine Shaft","hex":"#2F3136","rgb":[47,49,54]}}``

================================

## Crop

<ApiEndpoint method="GET" path="/crop" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `style` | `circle` `oval` `rectangle` `verticalrectangle` `pentagon` `hexagon` `octagon` | Required |
| `image` | `<link>` | Required |
| `rotation` | `<number>` | Not Required, Defaults to 0° |
| `scale` | `<number>` | Not Required, Defaults to 1.0 |

### Example Usage

<ApiEndpoint method="GET" path="/crop?style=octagon&image=https://i.imgur.com/BAfjBqz.png" />

* Output: ``Image``

================================

## Filters

<ApiEndpoint method="GET" path="/filters/:type" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `:type` | `red` `green` `blue` `grayscale` `blur` `pixelate` | Required |
| `image` | `<link>` | Required |

### Example Usage

<ApiEndpoint method="GET" path="/filters/pixelate?image=https://i.imgur.com/WJnuC0v.png" />

* Output: ``Image``

================================

## Overlays
<ApiEndpoint method="GET" path="/overlays/:type" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `:type` | `wanted` `wasted` `vicroyale` | Required |
| `image` | `<link>` | Required |

### Example Usage

<ApiEndpoint method="GET" path="/overlays/wasted?image=https://i.imgur.com/WJnuC0v.png" />

* Output: ``Image``

================================

## Password

<ApiEndpoint method="GET" path="/password" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `uppercase` | `true` `false` | Not Required, Defaults to `true` |
| `lowercase` | `true` `false` | Not Required, Defaults to `true` |
| `numbers` | `true` `false` | Not Required, Defaults to `true` |
| `symbols` | `true` `false` | Not Required, Defaults to `false` |
| `length` | `<number 1-1000>` | Not Required, Defaults to `12` |
| `count` | `<number 1-10>` | Not Required, Defaults to `1` |

### Example Usage

<ApiEndpoint method="GET" path="/password?length=20&count=2&uppercase=false&symbols=true" />

* Output: ``{"passwords":["1u(?=r%{5+8f%7{_6:j6","8c)v2:x5vi27|g=^@[&y"]}``

================================

## Welcome Image

<ApiEndpoint method="GET" path="/welcome/:background/:format" />

### Query Parameters
| Query | Value | Other Info |
|---|---|---|
| `:background` | `bmw` `cliff` `gaming` `minecraft` `skyline` `sunset` | Required |
| `:format` | `1` `2` `3` `4` | Required |
| `username` | `<text>` | Required for all formats |
| `avatar` | `<link>` | Required for formats `2`-`4` |
| `servername` | `<text>` | Required for formats `3`-`4` |
| `membercount` | `<number>` | Required for format `4` |

### Example Usage

<ApiEndpoint method="GET" path="/welcome/cliff/2?username=McGRiM&avatar=https://i.imgur.com/BAfjBqz.png" />

* Output: ``Image``