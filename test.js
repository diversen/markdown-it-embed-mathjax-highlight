//md = require('markdown-it-bin');
md = require('markdown-it-embed-highlight-mathjax');
md.options.html = true;

var str = "<p>test</p># her er en test ![test](./test/test.mp4) $1 *2* 3$";
console.log(md.render(str));
