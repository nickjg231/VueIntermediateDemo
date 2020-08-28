<template>
  <div>
    <section-component>
      <template slot="title">Data Binding</template>
      <template slot="header">
        When designing templates, you often want a dynamic display that changes based on:
        <ul>
          <li>Data Binding - Logic in your template which dictates how the component will look when rendered</li>
          <li>Event Binding - User interactions with input elements</li>
        </ul>
        <p>
          When a template contains logic based on a variable (e.g. interpolations, conditions, loops, etc.), the
          template is bound to that variable. This is data binding. Whenever one of these bound variables change, that
          template must re-render since it may render differently. This is, in essence, <b>Vue's reactivity system</b>.
          Think of the template like a Computed Property.</p>
        <p>When a template has elements that are setup to capture events (e.g. button clicks, text inputs, etc.), the
          template is bound to these events. This is called event binding, which is similar, but will be covered in the
          events section.</p>
        <p>Here's a simple example that uses both. First, the user will click a button to fetch data. This triggers a
          function which shows a loader, then fetches some data. After being retrieved, the data will display:
        </p>
        <code-snippet :code="fetchSimulatorCodeTemplate"></code-snippet>
        <code-snippet :code="fetchSimulatorCodeScript"></code-snippet>
        <fetch-simulator></fetch-simulator>
        <br>
        <p>In the example above, we bind variables to the template in the following ways:</p>
        <ul>
          <li>conditional rendering - <code class="prettyprint">v-if="variable"</code> / <code class="prettyprint">v-else-if="variable2"</code>
            /
            <code class="prettyprint">v-else</code></li>
          <li>list rendering - <code class="prettyprint">v-for="elem in arrayVariable"</code></li>
          <li>text interpolation - <code class="prettyprint" v-pre>{{ variable }}</code></li>
        </ul>
        <p>Note: You can use variables or expressions in any of these places. These are all perfectly valid</p>
        <ul>
          <li><code class="prettyprint">v-if="isLoading"</code></li>
          <li><code class="prettyprint">v-if="count % 2 === 0"</code></li>
          <li><code class="prettyprint">v-for="elem in arrayVar.filter(x => x.id > 2)"</code></li>
          <li><code class="prettyprint" v-pre>{{ user.lastName + ', ' + user.firstName }}</code></li>
        </ul>
      </template>
      <p>To render the template, Vue compiles the templates into <i>Virtual DOM</i> render functions under the hood.
        Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to
        re-render and apply the minimal amount of DOM manipulations when the app state changes.</p>
    </section-component>
    <section-component>
      <template slot="title">Attribute Binding</template>
      <template slot="header">
        <p>
          Mustache syntax cannot be used inside HTML attributes. Instead, you can use the <code class="prettyprint">v-bind</code>
          directive.
          You can prepend any HTML attribute with <code class="prettyprint">v-bind:</code> (or with the short-hand,
          <code class="prettyprint">:</code>), to bind
          the attribute to a variable.</p>
        <p>Examples:</p>
        <ul class="tight-list">
          <li>
            <h4>Disable an input:</h4>
            <p>Given the following template:</p>
            <code-snippet :code="disabledButtonTemplate"></code-snippet>
            <p>And the following data:</p>
            <code-snippet :code="disabledButtonData"></code-snippet>
            <p>Then it renders the following HTML:</p>
            <code-snippet :code="disabledButtonHtml"></code-snippet>
            <p>And displays:</p>
            <button disabled>Click</button>
          </li>
          <li>
            <h4>Apply classes conditionally:</h4>
            <p>There are several ways to apply classes, depending on your requirements</p>
            <div>Note: The conditional class attribute may co-exist with the native attribute, like so:
              <code-snippet :code="bothClassAttributesTemplate"></code-snippet>
              <p>It will render with all classes in the native attribute, and whichever conditional classes are
                added:</p>
              <code-snippet :code="bothClassAttributesHtml"></code-snippet>
            </div>
            <class-binding></class-binding>
          </li>
        </ul>
      </template>
    </section-component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import FetchSimulator from '@/components/FetchSimulator.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';
import ClassBinding from '@/components/ClassBinding.vue';

@Component({
  components: {
    ClassBinding,
    CodeSnippet,
    FetchSimulator,
    SectionComponent
  }
})
export default class DataBinding extends Vue {
  private fetchSimulatorCodeTemplate = `<template>\n  <div>\n    <table>\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Address</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-if="isLoading">\n          <td colspan="3">\n            <loader></loader>\n          </td>\n        </tr>\n        <tr v-else-if="usersList.length === 0">\n          <td colspan="3">There are no results to show</td>\n        </tr>\n        <template v-else>\n          <tr v-for="user in usersList">\n            <td>{{user.id}}</td>\n            <td>{{user.name}}</td>\n            <td>{{user.address}}</td>\n          </tr>\n        </template>\n      </tbody>\n    </table>\n    <br>\n    <button @click="fetchUsers">Fetch Users</button>\n    <button @click="clearUsers">Clear Users</button>\n  </div>\n</template>\n`;
  private fetchSimulatorCodeScript = `export default class FetchSimulator extends Vue {\n  private isLoading: boolean = false;\n  private usersList: any[] = [];\n\n  private fetchUsers(): void {\n    this.isLoading = true;\n    fetch(...).then(() => this.isLoading = false);\n  }\n\n  private clearUsers(): void {\n    this.usersList = [];\n  }\n}`;
  private disabledButtonTemplate = `<button :disabled="isDisabled">Click</button>`;
  private disabledButtonData = `data: {\n  isDisabled: true;\n}`;
  private disabledButtonHtml = `<button disabled>Click</button>`;
  private bothClassAttributesTemplate = `<div class="underline" :class="{'text-danger': true}"></div>`;
  private bothClassAttributesHtml = `<div class="underline text-danger"></div>`;

}
</script>

<style lang="scss" scoped>
code {
  white-space: nowrap;
}
</style>
