const indentString = require('indent-string');

module.exports = function toString(sfcDescriptor, options = {}) {
  const {
    template,
    script,
    styles,
    customBlocks
  } = sfcDescriptor;

  const indents = Object.assign({
    template: 2,
    script: 0,
    style: 0
  }, options.indents);

  return [template, script, ...styles, ...customBlocks]
    // discard blocks that don't exist
    .filter(block => block != null)
    // sort blocks by source position
    .sort((a, b) => a.start - b.start)
    // figure out exact source positions of blocks
    .map(block => {
      const openTag = makeOpenTag(block);
      const closeTag = makeCloseTag(block);

      return Object.assign({}, block, {
        openTag,
        closeTag,

        startOfOpenTag: block.start - openTag.length,
        endOfOpenTag: block.start,

        startOfCloseTag: block.end,
        endOfCloseTag: block.end + closeTag.length
      });
    })
    // generate sfc source
    .reduce((sfcCode, block, index, array) => {
      const first = index === 0;

      let newlinesBefore = 0;

      if (first) {
        newlinesBefore = block.startOfOpenTag;
      } else {
        const prevBlock = array[index - 1];
        newlinesBefore = block.startOfOpenTag - prevBlock.endOfCloseTag;
      }

      return sfcCode
        + '\n'.repeat(newlinesBefore)
        + block.openTag
        + indentString(block.content, indents[block.type] || 0)
        + block.closeTag;
    }, '');
}

function makeOpenTag(block) {
  let source = '<' + block.type;

  source += Object.keys(block.attrs)
    .sort()
    .map(name => {
      const value = block.attrs[name];

      if (value === true) {
        return name;
      } else {
        return `${name}="${value}"`;
      }
    })
    .map(attr => ' ' + attr)
    .join('');

  return source + '>';
}

function makeCloseTag(block) {
  return `</${block.type}>\n`
}