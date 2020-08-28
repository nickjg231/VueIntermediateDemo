<template>
  <div>
    <h4>Common Text Events:</h4>
    <label>
      <input v-model="inputText"
             type="text"
             @input="triggerEvent(textEvents, 'input')"
             @change="triggerEvent(textEvents, 'change')"
             @focus="triggerEvent(textEvents, 'focus')"
             @blur="triggerEvent(textEvents, 'blur')"
             @keydown="triggerEvent(textEvents, 'keydown')"
             @keyup="triggerEvent(textEvents, 'keyup')"
             @keypress="triggerEvent(textEvents, 'keypress')">
    </label>
    <div>
      <span :style="getStyle(textEvents, 'focus')">Focus</span>&nbsp;
      <span :style="getStyle(textEvents, 'blur')">Blur</span>&nbsp;
      <span :style="getStyle(textEvents, 'input')">Input</span>&nbsp;
      <span :style="getStyle(textEvents, 'change')">Change</span>&nbsp;
      <span :style="getStyle(textEvents, 'keydown')">Keydown</span>&nbsp;
      <span :style="getStyle(textEvents, 'keyup')">Keyup</span>&nbsp;
      <span :style="getStyle(textEvents, 'keypress')">Keypress</span>&nbsp;
    </div>
    <hr>
    <h4>Common Element Events:</h4>
    <div style="height: 50px; width: 100px; border: 1px solid black; line-height: 50px; text-align: center;"
         @mouseenter="triggerEvent(elementEvents, 'mouseenter')"
         @mouseleave="triggerEvent(elementEvents, 'mouseleave')"
         @click="triggerEvent(elementEvents, 'click')">Div
    </div>
    <div>
      <span :style="getStyle(elementEvents, 'mouseenter')">Mouse Enter</span>&nbsp;
      <span :style="getStyle(elementEvents, 'mouseleave')">Mouse Leave</span>&nbsp;
      <span :style="getStyle(elementEvents, 'click')">Click</span>&nbsp;
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
    blur: new EventLabel(),
    focus: new EventLabel(),
    input: new EventLabel(),
    change: new EventLabel(),
    keydown: new EventLabel(),
    keyup: new EventLabel(),
    keypress: new EventLabel()
  };
  private elementEvents: any = {
    mouseenter: new EventLabel(),
    mouseleave: new EventLabel(),
    click: new EventLabel()
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
