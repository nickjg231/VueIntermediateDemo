<template>
  <div class='code-component'>
    <pre>{{code}}</pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CodeSnippet extends Vue {
  @Prop()
  private code!: string;
}
</script>

<style lang="scss" scoped>
.code-component {
  background-color: #eff0f1;
  padding: 0 8px;
  display: inline-block;
  white-space: pre-wrap;
}
</style>
