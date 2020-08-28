<template>
  <div>
    <h4>Common Text Events:</h4>
    <label>
      <input v-model="inputText"
             type="text"
             @keypress.enter="triggerEvent(textEvents, 'enter')"
             @keydown.tab.prevent="triggerEvent(textEvents, 'tab')"
             @keydown.delete="triggerEvent(textEvents, 'delete')"
             @keydown.esc="triggerEvent(textEvents, 'esc')"
             @keypress.space="triggerEvent(textEvents, 'space')"
             @keydown.up="triggerEvent(textEvents, 'up')"
             @keydown.down="triggerEvent(textEvents, 'down')"
             @keydown.left="triggerEvent(textEvents, 'left')"
             @keydown.right="triggerEvent(textEvents, 'right')">
    </label>
    <div>
      <span :style="getStyle(textEvents, 'enter')">Enter</span>&nbsp;
      <span :style="getStyle(textEvents, 'tab')">Tab</span>&nbsp;
      <span :style="getStyle(textEvents, 'delete')">Delete/Backspace</span>&nbsp;
      <span :style="getStyle(textEvents, 'esc')">Esc</span>&nbsp;
      <span :style="getStyle(textEvents, 'space')">Space</span>&nbsp;
      <span :style="getStyle(textEvents, 'up')">Up</span>&nbsp;
      <span :style="getStyle(textEvents, 'down')">Down</span>&nbsp;
      <span :style="getStyle(textEvents, 'left')">Left</span>&nbsp;
      <span :style="getStyle(textEvents, 'right')">Right</span>&nbsp;
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';
import EventLog from '@/components/EventLog.vue';
import EventLabel from '@/@types/EventLabel';

@Component({
  components: {
    EventLog,
    CodeSnippet,
    SectionComponent
  }
})
export default class EventPrinter extends Vue {
  private inputText: string = '';
  private textEvents: any = {
    enter: new EventLabel(),
    tab: new EventLabel(),
    delete: new EventLabel(),
    esc: new EventLabel(),
    space: new EventLabel(),
    up: new EventLabel(),
    down: new EventLabel(),
    left: new EventLabel(),
    right: new EventLabel()
  };

  private triggerEvent(eventContainer: any, eventName: string) {
    eventContainer[eventName].value = true;
  }

  private getStyle(eventContainer: any, eventName: string) {
    return eventContainer[eventName].styleAttribute;
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24px;
  background-color: #F8F8F8;
}

</style>
