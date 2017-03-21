<template lang="html">
  <div class="notfound">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      text: '木有找到页面，哇哈哈',
    };
  },
};
</script>

<style lang="css">
  .notfound {
    color: red;
  }
</style>
