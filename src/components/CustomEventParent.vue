<template>
  <div class="container">
    <custom-event :students="studentsList" @delete-row="deleteRow"></custom-event>
    <br>
    <button @click="resetTable">Reset table</button>
    <div :style="isEventTriggered.styleAttribute">delete-row event triggered</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Model } from 'vue-property-decorator';
import CustomEvent from './CustomEvent.vue';
import EventLabel from '@/@types/EventLabel';

@Component({
  components: {CustomEvent}
})
export default class CustomEventParent extends Vue {
  private studentsList: any[] = [];
  private isEventTriggered: EventLabel = new EventLabel();

  private created(): void {
    this.resetTable();
  }

  private deleteRow(id: number): void {
    this.signalEventTriggered();
    const studentToDeleteIndex = this.studentsList.findIndex((student: any) => student.id === id);
    this.studentsList.splice(studentToDeleteIndex, 1);
  }

  private resetTable(): void {
    this.studentsList = [{id: 1, name: 'Johnny', grade: 88}, {id: 2, name: 'Billy', grade: 69}, {id: 3, name: 'Bobby', grade: 97 }];
  }

  private signalEventTriggered() {
    this.isEventTriggered.value = true;
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 12px;
  padding: 16px;
  background-color: #F8F8F8;
}
</style>
