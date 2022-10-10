<template>
  <div class="test">
    {{route('test1', {test: 1})}}
    {{route('test2')}}
    {{route('test1')}}
    <!-- Bad working -->
    {{route('test2', {test: 1})}}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Test',
  methods: {
    // All methods normal working
    test() {
      // optional properties argument
      this.route('test1', {test: 1})
      // required properties argument, with object, contains key "test"
      this.route('test2')
      // optional properties argument
      this.route('test1')
      // required properties argument
      this.route('test2', {test: 1})
    },
  },
}
</script>