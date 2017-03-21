<template lang="html">
  <div>
    <div>
      counts: {{counts}}
      <button type="button" @click="increment()">add</button>
    </div>
    <ul class="User">
      <li v-for="id in users">
        {{entities.users[id].id}} -- {{entities.users[id].name}}
        <el-button type="button" @click="handleUpdate(id)">update</el-button>
        <el-button type="button" @click="handleDelete(id)">delete</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      users: [1, 2, 3],
      entities: {
        users: {
          1: {
            id: 1,
            name: 'John Wallson',
          },
          2: {
            id: 2,
            name: 'Sharelos Homeles',
          },
          3: {
            id: 3,
            name: 'Moliyati',
          },
        },
      },
      counts: 0,
    };
  },
  mounted() {
    console.log('mounted'); // eslint-disable-line no-console
  },

  methods: {
    increment() {
      this.counts = this.counts + 1;
    },

    handleDelete(id) {
      const indexOf = this.users.indexOf(id);
      if (indexOf === -1) return;

      this.users.splice(indexOf, 1); // delete
    },

    handleUpdate(id) {
      const newName = window.prompt('input a new name');
      if (newName) {
        this.entities.users[id].name = newName;
      }
    },
  },
};
</script>

<style lang="css">
  ul {
    list-style-type: none;
  }
</style>
