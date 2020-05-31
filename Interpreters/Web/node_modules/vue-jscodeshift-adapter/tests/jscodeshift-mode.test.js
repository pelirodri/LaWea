const adapter = require('../src/index');
const sfc = require('./make-sfc');

const template = `
  <div class="widget">{{name}}</div>
`;

const script = `
export default {
  props: {
    name: String
  }
};
`;

const style = `
.widget {
  color: red;
}
`;

describe('jscodeshift mode', () => {
  describe('transforming js file', () => {
    test('passes js content as fileInfo.source', () => {
      let js = null;
      const adapted = adapter(function transform(fileInfo, api, options) {
        js = fileInfo.source;
      });

      adapted({
        source: 'const b = 400;',
        path: 'util.js'
      }, {}, {});

      expect(js).toBe('const b = 400;');
    });

  });

  describe('transforming vue component', () => {
    test('passes component <script> content as fileInfo.source', () => {
      let source = null;
      const adapted = adapter(function transform(fileInfo, api, options) {
        source = fileInfo.source;
      });

      adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, {}, {});

      expect(source).toBe(script);
    });

    test('is no-op and skips transform when there is no <script>', () => {
      let invokedTransform = false;
      const adapted = adapter(function transform(fileInfo, api, options) {
        invokedTransform = true;
        return 'var fail = 4;';
      });

      const result = adapted({
        source: sfc({ template, style }),
        path: 'Widget.vue'
      }, {}, {});

      expect(result).toBe(undefined);
      expect(invokedTransform).toBe(false);
    });

    test('passes component path as fileInfo.path', () => {
      let path = null;
      const adapted = adapter(function transform(fileInfo, api, options) {
        path = fileInfo.path;
      });

      adapted({
        path: '/the/path/Widget.vue',
        source: sfc({template, script, style})
      }, {}, {});

      expect(path).toBe('/the/path/Widget.vue');
    });

    test('passes api to transform', () => {
      const apiPassed = {
        jscodeshift: () => { },
        stats: () => { }
      };
      let apiSeen = null;
      const adapted = adapter(function transform(fileInfo, api, options) {
        apiSeen = api;
      });

      adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, apiPassed, {});

      expect(apiSeen.jscodeshift).toBe(apiPassed.jscodeshift);
      expect(apiSeen.stats).toBe(apiPassed.stats);
    });

    test('passes options to transform', () => {
      const optionsPassed = {
        blah: 1
      };
      let optionsSeen = null;
      const adapted = adapter(function transform(fileInfo, api, options) {
        optionsSeen = options;
      });

      const result = adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, {}, optionsPassed);

      expect(optionsSeen.blah).toBe(optionsPassed.blah);
    });

    test('is no-op if transform returns undefined', () => {
      const adapted = adapter(function transform(fileInfo, api, options) {
        return undefined;
      });

      const result = adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, {}, {});

      expect(result).toBe(undefined);
    });

    test('is no-op if transform returns null', () => {
      const adapted = adapter(function transform(fileInfo, api, options) {
        return null;
      });

      const result = adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, {}, {});

      expect(result).toBe(undefined);
    });

    test('is no-op if transform returns empty string', () => {
      const adapted = adapter(function transform(fileInfo, api, options) {
        return '';
      });

      const result = adapted({
        source: sfc({template, script, style}),
        path: 'Widget.vue'
      }, {}, {});

      expect(result).toBe(undefined);
    });
  })
});