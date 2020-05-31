const adapt = require('../../../src/index');
const describe = require('jscodeshift-helper').describe;

module.exports = adapt((fileInfo, api, options) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.ExportDefaultDeclaration)
    .find(j.ObjectExpression)
    .at(0)
    .find(j.Property, p => {
      return p.key.name === 'props'
    })
    .find(j.Property)
    .filter(p => {
      return p.parent.parent.node.key.name === 'props';
    })
    .find(j.ObjectExpression)
    .forEach(o => {
      const requiredFlag = o.node.properties.find(p => {
        return p.key.name === 'required'
      });

      if (requiredFlag) {
        if (requiredFlag.value.value === false) {
          requiredFlag.value = j.literal(true);
        }
      } else {
        o.node.properties.push(j.property(
          'init',
          j.identifier('required'),
          j.literal(true)
        ));
      }
    });

  return root.toSource();
});
