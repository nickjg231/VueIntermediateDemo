<template>
  <div class='event-log'>
    <ul>
      <li v-for="event in uniqueEvents">
        <div>{{event.type}}</div>
        <div>Data: {{event.data}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Model } from 'vue-property-decorator';

@Component({})
export default class EventLog extends Vue {
  @Prop()
  private events!: any;

  private uniqueEvents: any[] = [];

  @Watch('events', {deep: true})
  private onEventsChanged(): void {
    const keys = Object.keys(this.events);
    this.uniqueEvents = keys.map((key: string) => {
      return {
        type: key,
        data: this.events[key].data
      };
    });
  }
}
</script>

<style lang="scss" scoped>
.code-component {
  background-color: #000;
  padding: 0 8px;
  display: inline-block;
  white-space: pre-wrap;
  width: 100%;
}
</style>
