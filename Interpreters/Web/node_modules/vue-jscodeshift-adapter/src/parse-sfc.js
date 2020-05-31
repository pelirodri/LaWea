const compiler = require('vue-template-compiler');
const cheerio = require('cheerio');

const detectIndent = require('detect-indent');
const indentString = require('indent-string');

module.exports = function parse(source) {
  const sfcDescriptor = compiler.parseComponent(source);

  if (sfcDescriptor.template) {
    sfcDescriptor.template.content = fixTemplateIndent(sfcDescriptor, source);
  }

  return sfcDescriptor;
};

// assumes sfc has a <template>
// returns content for <template> with correct indent
function fixTemplateIndent(sfcDescriptor, source) {
  const $ = cheerio.load(source);

  // contents of template including outer <template> pair
  const fullTemplate = $.html($('template'));
  const templateIndent = detectIndent(fullTemplate);

  const templateBlock = sfcDescriptor.template;
  return indentString(templateBlock.content, templateIndent.amount, templateIndent.indent);
}