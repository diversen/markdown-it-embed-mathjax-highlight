# markdown-it-embed-mathjax-highlight.js

Markdown-it with mathjax, highlightjs, and html5 video embed. 

md = require('markdown-it-embed-mathjax-highlight');

// Change options as you like, e.g.: 
md.options.html = true;

var str = "<p>test</p># her er en test ![test](./test/test.mp4) $1 *2* 3$";
console.log(md.render(str));



# markdown-it-embed-mathjax-highlight
