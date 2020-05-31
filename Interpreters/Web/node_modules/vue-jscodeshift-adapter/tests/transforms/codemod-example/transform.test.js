const { testTransform } = require('../test-helper');
const transform = require('./transform');

const input = `
<template>
  <div class="widget">
    Hello {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    age: {
      type: String
    }
  },
  computed: {
    hasName() {
      return !!this.name;
    }
  }
};
</script>

<style>
.widget {
  color: red;
}
</style>
`;

const output = `
<template>
  <div class="widget">
    Hello {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  },
  computed: {
    hasName() {
      return !!this.name;
    }
  }
};
</script>

<style>
.widget {
  color: red;
}
</style>
`;

testTransform(transform, 'Widget.vue', input, output);