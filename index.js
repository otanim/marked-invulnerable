var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true
});

var partitionReplace = function partitionReplace(sourceCode, toReplace, firstPartEndIndex, secondPartBeginIndex) {
  var firstPart = sourceCode.substring(0, firstPartEndIndex);
  var secondPart = sourceCode.substring(secondPartBeginIndex);
  var fullReplacement = '' + firstPart + toReplace + secondPart;

  return fullReplacement;
};

module.exports = function (markdown) {
  var html = marked(markdown);
  var hrefRegExp = /href=(["']?(data|javascript|vbscript)(&#58|:|&colon;)((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?)/ig;
  var hrefStr;
  hrefStr = hrefRegExp.exec(html);
  while (hrefStr !== null) {
    var href = hrefStr[1];
    if (!href || !/["']/.test(href)) {
      continue;
    }
    href = href.slice(1, -1);

    var index = html.indexOf(href, hrefStr.index);

    html = partitionReplace(html, '#hack-attempt', index, index + href.length);

    hrefRegExp.lastIndex = 0;
    hrefStr = hrefRegExp.exec(html);
  }

  return html;
};