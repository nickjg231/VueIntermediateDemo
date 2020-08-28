<template>
  <div>
    <section-component>
      <template slot="title">Event Binding</template>
      <template slot="header">We can use the <code class="prettyprint">v-on</code> directive to listen to DOM events and
        call some expression or function when they're triggered. Note: There is a shorthand here as well, <code
            class="prettyprint">@</code>
      </template>
      <p>Example:</p>
      <code-snippet :code="buttonClickTemplate"></code-snippet>
      <code-snippet :code="buttonClickScript"></code-snippet>
      <event-button></event-button>
      <p>You may use expressions or methods as event handlers:</p>
      <code-snippet :code="buttonExpressionMethodTemplate"></code-snippet>
      <code-snippet :code="buttonExpressionMethodScript"></code-snippet>
      <event-button-expression-and-method></event-button-expression-and-method>
    </section-component>
    <section-component>
      <template slot="title">Common Events</template>
      <template slot="header">There are many native events built into HTML and javascript. These are some common ones:
      </template>
      <event-printer></event-printer>
    </section-component>
    <section-component>
      <template slot="title">Event Modifiers</template>
      <template slot="header">When events are triggered, they naturally bubble up. Take the following example:
      </template>
      <code-snippet :code="bubbleTemplate"></code-snippet>
      <br>
      <form @click="callAlert('form')" style="border: 1px solid red; padding:8px">form
        <div @click="callAlert('div')" style="border: 1px solid red; padding:8px">div
          <p @click="callAlert('p')" style="border: 1px solid red; padding:8px">p<br>
            Click Here
          </p>
        </div>
      </form>
      <br>
      <p>There are certain Event Modifiers you can use to prevent standard behavior of events. The list is <a
          href="https://vuejs.org/v2/guide/events.html#Event-Modifiers">here in Vue documentation</a>. These aren't
        needed often, but here's an example of using <code>@click.stop</code>, which is the modifier for <code>event.stopPropagation()</code>,
        on the previous example:</p>
      <code-snippet :code="bubblePreventTemplate"></code-snippet>
      <br>
      <form @click="callAlert('form')" style="border: 1px solid red; padding:8px">form
        <div @click="callAlert('div')" style="border: 1px solid red; padding:8px">div
          <p @click.stop="callAlert('p')" style="border: 1px solid red; padding:8px">p<br>
            Click Here
          </p>
        </div>
      </form>
      <p>Note: Many of these built in features like propagation may seem pointless, however don't prevent them without a
        real need. Usually a task that seemingly requires it can be solved a better way. Doing so can create hidden
        pitfalls, as detailed <a href="https://javascript.info/bubbling-and-capturing">here</a>. For example:</p>
      <ol>
        <li>We have a nested menu. Each submenu handles clicks on its elements and call <code>stopPropagation</code> so
          that the outer menu won't trigger.
        </li>
        <li>Later we decide to catch clicks on the whole window, to track users’ behavior (where people click). Some
          analytic systems do that. Usually the code uses <code>document.addEventListener('click'…)</code> to catch all
          clicks.
        </li>
        <li>Our analytic won’t work over the area where clicks are stopped by stopPropagation. Sadly, we’ve got a “dead
          zone”.
        </li>
      </ol>
    </section-component>
    <section-component>
      <template slot="title">Key Code Modifiers</template>
      <template slot="header">Similar to event modifiers, you can setup triggers for when certain keys are pressed</template>
      <code-snippet :code="keyEventModifier"></code-snippet>
      <event-keycode-printer></event-keycode-printer>
    </section-component>
    <section-component>
      <template slot="title">Custom Events</template>
      <template slot="header">Capturing events from components is different than capturing events on native HTML
        elements.
      </template>
    </section-component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';
import EventButton from '@/components/EventButton.vue';
import EventButtonExpressionAndMethod from '@/components/EventButtonExpressionAndMethod.vue';
import EventPrinter from '@/components/EventPrinter.vue';
import EventKeycodePrinter from '@/components/EventKeycodePrinter.vue';

@Component({
  components: {
    EventKeycodePrinter,
    EventPrinter,
    EventButtonExpressionAndMethod,
    EventButton,
    CodeSnippet,
    SectionComponent
  }
})
export default class EventBinding extends Vue {
  private buttonClickTemplate = `<template>\n  <div>\n    <button @click="counter += 1">Add 1</button>\n    <p>The button has been clicked {{ counter }} times.</p>\n  </div>\n</template>`;
  private buttonClickScript = `export default class EventButton extends Vue {\n  private counter: number = 0;\n}`;
  private buttonExpressionMethodTemplate = `<template>\n  <div>\n    <button @click="counter += 1">Add 1 - Inline Expression</button>\n    <button @click="incrementCounter">Add 1 - Method</button>\n    <p>The button has been clicked {{ counter }} times.</p>\n  </div>\n</template>`;
  private buttonExpressionMethodScript = `export default class EventButton extends Vue {\n  private counter: number = 0;\n\n  private incrementCounter(): void {\n    this.counter++;\n  }\n}`;
  private bubbleTemplate = `<form @click="callAlert('form')">\n  <div @click="callAlert('div')">\n    <p @click="callAlert('p')">\n      Click Here\n    </p>\n  </div>\n</form>`;
  private bubblePreventTemplate = `<form @click="callAlert('form')">\n  <div @click="callAlert('div')">\n    <p @click.stop="callAlert('p')">\n      Click Here\n    </p>\n  </div>\n</form>`;
  private keyEventModifier = `<input v-model="inputText"\n       type="text"\n       @keypress.enter="triggerEnterKeyFunction"/>`;

  private callAlert(elem: string): void {
    window.alert(elem);
  }
}
</script>

<style lang="scss" scoped>
code {
  white-space: nowrap;
}
</style>
