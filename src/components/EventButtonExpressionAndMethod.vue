<template>
  <div class="container">
    <button @click="counter += 1">Add 1 - Inline Expression</button>
    <button @click="incrementCounter">Add 1 - Method</button>
    <p>The button has been clicked {{ counter }} times.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';

@Component({
  components: {
    CodeSnippet,
    SectionComponent
  }
})
export default class EventButton extends Vue {
  private counter: number = 0;

  private incrementCounter(): void {
    this.counter++;
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24px;
  background-color: #F8F8F8;
}

</style>
