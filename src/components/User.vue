<template lang="html">
  <div>
    <div>
      counts: {{counts}}
      <button type="button" @click="increment()">add</button>
    </div>
    <ul class="User">
      <li v-for="user in users">
        {{user.id}} -- {{user.name}}
        <el-button type="button" @click="handleUpdate(id)">update</el-button>
        <el-button type="button" @click="handleDelete(id)">delete</el-button>
      </li>
    </ul>

    <ul class="User">
      <li v-for="user in enabledUsers">
        {{user.id}} -- {{user.name}}
        <el-button type="button" @click="handleUpdate(id)">update</el-button>
        <el-button type="button" @click="handleDelete(id)">delete</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'User',

  data() {
    return {
      counts: 0,
    };
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    ...mapActions([
      'fetchUsers',
    ]),
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

  computed: {
    ...mapState({
      users: state => state.user.users,
    }),
    ...mapGetters([
      'enabledUsers',
    ]),
  },
};
</script>

<style lang="css">
  ul {
    list-style-type: none;
  }
</style>
