resolve-relative-url
====================

[![Build Status](https://travis-ci.org/eiriklv/resolve-relative-url.svg?branch=master)](https://travis-ci.org/eiriklv/resolve-relative-url)
[![npm version](https://badge.fury.io/js/resolve-relative-url.svg)](http://badge.fury.io/js/resolve-relative-url)
[![Dependency Status](https://david-dm.org/eiriklv/resolve-relative-url.svg)](https://david-dm.org/eiriklv/resolve-relative-url)
[![devDependency Status](https://david-dm.org/eiriklv/resolve-relative-url/dev-status.svg)](https://david-dm.org/eiriklv/resolve-relative-url#info=devDependencies)

#### Introduction:
Resolve a possibly relative URL agains a source URL.
If the URL is not relative, return it unchanged.

---------------------------------------

### (link, source)

Resolve a possibly relative URL

__Arguments__

* `link` - A possibly relative URL.
* `source` - Source URL.

__Example__

```js
var resolveRelative = require('resolve-relative-url');

var resolvedURL = resolveRelative('/banner.img', 'http://www.somedomain.com');
// http://www.somedomain.com/banner.img
var resolvedURL = resolveRelative('https://www.otherdomain.com/banner.img', 'http://www.somedomain.com');
// https://www.otherdomain.com/banner.img
var resolvedURL = resolveRelative('', 'http://www.somedomain.com');
// https://www.somedomain.com
```
