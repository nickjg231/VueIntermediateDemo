<template>
  <div class='code-component'>
    <pre class="prettyprint" :class="{'linenums': isMultiline}" :key="key">{{ code }}</pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class CodeSnippet extends Vue {
  @Prop()
  private code!: any;

  private key: number = 0;

  @Watch('code', {deep: true})
  private onCodeChange() {
    this.key++;
    this.$nextTick(() => {
      (window as any).PR.prettyPrint();
    });
  }

  private get isMultiline(): boolean {
    if (typeof this.code === 'object')
      return true;
    return this.code.split(/\r\n|\r|\n/).length > 1;
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
