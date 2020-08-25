<template>
  <div class="container">
    <p>Below is all of the ways to add classes, followed by an example where you may toggle/interact with the different ways</p>
    <ul class="tight-list">
      <li>
        <h5>Inline Object Syntax</h5>
        <code-snippet :code="inlineObjectSyntax"></code-snippet>
        <div class="underline" :class="{'text-danger': hasError, active: isActive}">Inline Object Syntax - {{classString(true, hasError, isActive)}}</div>
      </li>
      <li>
        <h5>Bound Object Syntax</h5>
        <code-snippet :code="boundObjectSyntax"></code-snippet>
        <code-snippet :code="classObject"></code-snippet>
        <div :class="classObject.classObject">Bound Object Syntax - {{classString(isUnderlined, hasError, isActive)}}</div>
      </li>
      <li>
        <h5>Array Syntax</h5>
        <code-snippet :code="arraySyntax"></code-snippet>
        <code-snippet :code="classObject"></code-snippet>
        <div :class="[...classObject.classObject]">Array Syntax - {{classString(isUnderlined, hasError, isActive)}}</div>
      </li>
    </ul>
    <div>
      <button @click="isUnderlined = !isUnderlined">Toggle Underline</button>
      <button @click="hasError = !hasError">Toggle Error</button>
      <button @click="isActive = !isActive">Toggle Active</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import Loader from '@/components/Loader.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';

@Component({
  components: {
    CodeSnippet,
    Loader,
    SectionComponent
  },
})
export default class ClassBinding extends Vue {
  private isUnderlined: boolean = false;
  private hasError: boolean = true;
  private isActive: boolean = false;

  private classString(underline?: boolean, hasError?: boolean, isActive?: boolean): string {
    let classes = '';
    if (underline)
      classes += 'underline';
    if (hasError)
      classes += ' text-danger';
    if (isActive)
      classes += ' active';
    return classes;
  }

  private get classObject(): any {
    return {
      classObject: {
        'underline': this.isUnderlined,
        'text-danger': this.hasError,
        'active': this.isActive
      }
    };
  }

  private inlineObjectSyntax = `<div class="underline"\n     :class="{'text-danger': hasError, active: isActive}">Inline Object Syntax</div>`;
  private boundObjectSyntax = `<div :class="classObject">Bound Object Syntax</div>`;
  private arraySyntax = `<div :class="[classObject.underline, classObject['text-danger'], classObject.active]">Array Syntax</div>`;
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 24px;
}

.underline {
  text-decoration: underline;
}

.text-danger {
  color: red;
}

.active {
  border: 3px solid blue;
}
</style>
