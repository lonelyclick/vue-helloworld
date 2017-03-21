<template>
  <div class="Home">
    I am Home Page, Unimplement {{count}}

    <el-button @click="handleIncrement">increment</el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },

  computed: {
    ...mapState({
      count: state => state.count,
    }),
  },

  methods: {
    handleIncrement() {
      this.incrementAsync({ count: 1 });
    },

    ...mapActions([
      'incrementAsync',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
