<template>
  <div class="section">
    <h2>
      <slot name="title"></slot>
    </h2>
    <p>
      <slot name="header"></slot>
    </p>
    <div>
      <slot></slot>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class SectionComponent extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
