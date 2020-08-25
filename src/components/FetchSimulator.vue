<template>
  <div class="container">
    <table class="table-borders">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="3">
            <loader></loader>
          </td>
        </tr>
        <tr v-else-if="usersList.length === 0">
          <td colspan="3">There are no results to show</td>
        </tr>
        <template v-else>
          <tr v-for="user in usersList">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.address}}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <br>
    <button @click="fetchUsers" class="btn">Fetch Users</button>
    <button @click="clearUsers" class="btn">Clear Users</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import Loader from '@/components/Loader.vue';

@Component({
  components: {
    Loader,
    SectionComponent
  },
})
export default class FetchSimulator extends Vue {
  private isLoading: boolean = false;
  private usersList: any[] = [];

  private fetchUsers(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.usersList = [
        {id: 1, name: 'John', address: '123 Main St.'},
        {id: 2, name: 'Bob', address: '456 South E St. W'},
        {id: 3, name: 'Joe', address: '789 Saint Street St.'},
      ];
      this.isLoading = false;
    }, 2500);
  }

  private clearUsers(): void {
    this.usersList = [];
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #F8F8F8;
  text-align: center;
  padding: 16px;
}

.table-borders {
  border: 1px solid #2c3e50;
  min-width: 400px;
  margin: 0 auto;

  td, th {
    padding: 8px;
    border: 1px solid #2c3e50
  }
}

.btn {
  width: 150px;
  margin: 0 16px;
}
</style>
