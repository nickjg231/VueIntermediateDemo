<template>
  <table>
    <thead>
      <tr>
        <th @click="fieldToSort = 'id'">Id</th>
        <th @click="fieldToSort = 'name'">Name</th>
        <th @click="fieldToSort = 'grade'">Grade</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in sortedStudentsList" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.grade }}</td>
        <td>
          <button @click="$emit('delete-row', student.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class CustomEvent extends Vue {
  @Prop()
  private students!: any[];
  private fieldToSort = 'id';

  private get sortedStudentsList() {
    return this.students.slice().sort((a, b) => {
      return a[this.fieldToSort].toString().localeCompare(b[this.fieldToSort].toString());
    });
  }
}
</script>

<style lang="scss" scoped>
table {
  border: 1px solid grey;

  th {
    font-weight: bold;
    cursor: pointer;
  }

  th, td {
    border: 1px solid grey;
    padding: 8px;
  }
}
</style>
