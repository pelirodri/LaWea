const fs = require('fs');
const compiler = require('vue-template-compiler');

const toString = require('./index');

it('is inverse of `compiler.parseComponent()`', () => {
  const source = fs.readFileSync('./test-components/Vanilla.vue', 'utf8');
  const descriptor = compiler.parseComponent(source);

  const result = toString(descriptor);

  expect(result).toBe(source)
});

it('vanilla sfc', async () => {
  const descriptor = await parse('./test-components/Vanilla.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('different order blocks', async () => {
  const descriptor = await parse('./test-components/DifferentOrderBlocks.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('leading newlines', async () => {
  const descriptor = await parse('./test-components/LeadingNewlines.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('no script', async () => {
  const descriptor = await parse('./test-components/NoScript.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('no template', async () => {
  const descriptor = await parse('./test-components/NoTemplate.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('no style', async () => {
  const descriptor = await parse('./test-components/NoStyle.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('multiple styles', async () => {
  const descriptor = await parse('./test-components/MultipleStyles.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('attributes on blocks', async () => {
  const descriptor = await parse('./test-components/AttributesOnBlocks.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('custom blocks', async () => {
  const descriptor = await parse('./test-components/CustomBlocks.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('extra newlines between blocks', async () => {
  const descriptor = await parse('./test-components/ExtraNewlinesBetweenBlocks.vue');

  const result = toString(descriptor);

  expect(result).toMatchSnapshot();
});

it('accepts custom indent amounts for every block', async () => {
  const descriptor = await parse('./test-components/CustomIndents.vue');

  const result = toString(descriptor, {
    indents: {
      template: 4,
      script: 2,
      style: 1,
      custom1: 10
    }
  });

  expect(result).toMatchSnapshot();
});

// helpers
function parse(pathToComponent) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToComponent, 'utf8', (err, sfc) => {
      if (err) return reject(err);

      try {
        const descriptor = compiler.parseComponent(sfc);
        return resolve(descriptor);
      } catch (e) {
        return reject(e);
      }
    })
  });
}