*This repository is a mirror of the [component](http://component.io) module [jonathanong/relative-date](http://github.com/jonathanong/relative-date). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jonathanong-relative-date`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
Javascript module for outputting relative dates. Tested platforms: Node, Firefox 3.6, Chromium 8.0

Install
=======
npm install relative-date

Usage
=====
On browsers:

```js
<script src="relative-date.js"></script>
<script>
  assert( relativeDate(new Date()), 'just now' );
  assert( relativeDate(1299627946000), '12 minutes ago');
  assert( relativeDate(0), '41 years ago');
</script>
```

On a CommonJS compliant environment:

```js
> var relativeDate = require('relative-date');
> relativeDate(new Date())
'just now'
> relativeDate(1299627946000)
'12 minutes ago'
> relativeDate(0)
'41 years ago'
```

CLI tool

    ~ $ npm install -g relative-date
    ~ $ relative-date 1355532654000
    a minute ago
    ~ $ relative-date "$(date +%s)000"
    just now


Testing
=======
node test/node.js || test/browser.html
