<template>
    <div>
        <section-component>
            <template slot="title">Input Binding</template>
            <template slot="header">
                <p>
                    We can use the <code class="prettyprint">v-model</code> directive to create data bindings on the following <code>form</code> elements:
                    <ul>
                        <li>input</li>
                            <ul>
                                <li>input</li>
                                <li>checkbox</li>
                                <li>radio</li>
                            </ul>
                        <li>textarea</li>
                        <li>select</li>
                    </ul>
                </p>
                <p>
                    The most important thing to keep in mind is that Vue will ignore the initial <code>value</code>, <code>checked</code>, or <code>selected</code>
                    attributes on any <code>form</code> elements. It will treat the Vue app's <code>data</code> section as the source of truth for any initial values
                    on these input elements.
                </p>
                <p>
                    <code-snippet :code="deafultValues"></code-snippet>
                    <default-input-values></default-input-values>
                </p>
            </template>
        </section-component>
        
        <section-component>
            <template slot="title">Text Inputs</template>
            <template slot="header">
                <code-snippet :code="textInputs"></code-snippet>
                <br/>
                <text-inputs></text-inputs>
            </template>
        </section-component>

        <section-component>
            <template slot="title">Checkbox</template>
            <template slot="header">
                <code-snippet :code="checkboxInputs"></code-snippet>
                <br/>
                <checkbox-inputs></checkbox-inputs>
            </template>
        </section-component>

        <section-component>
            <template slot="title">Multiple Checkboxes</template>
            <template slot="header">
                <code-snippet :code="multipleCheckboxes"></code-snippet>
                <br/>
                <multiple-checkboxes></multiple-checkboxes>
            </template>
        </section-component>

        <section-component>
            <template slot="title">Radio</template>
            <template slot="header">
                <code-snippet :code="radioInputs"></code-snippet>
                <br/>
                <radio-inputs></radio-inputs>
            </template>
        </section-component>

        <section-component>
            <template slot="title">Select</template>
            <template slot="header">
                <code-snippet :code="selectInputs"></code-snippet>
                <br/>
                <select-inputs></select-inputs>
            </template>
        </section-component>

        <section-component>
            <template slot="title">Modifiers</template>
            <template slot="header">
                <p>Using built-in modifiers can simplify some of the logic you would otherwise have to write when dealing with form inputs.</p>
                <p>For example, you can use the <code>.trim</code> modifier to trim whitespace automatically:</p>
                <code-snippet :code="trimMod"></code-snippet>
                <p>You can also force user input into the <code>number</code> type by using the <code>.number</code> modifier. This is useful because even on numeric inputs, the value of HTML input elements always returns a string.:</p>
                <code-snippet :code="numberMod"></code-snippet>
            </template>
        </section-component>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SectionComponent from '@/components/SectionComponent.vue';
import CodeSnippet from '@/components/CodeSnippet.vue';
import DefaultInputValues from '@/components/DefaultInputValues.vue';
import TextInputs from '@/components/TextInputs.vue';
import CheckboxInputs from '@/components/CheckboxInputs.vue';
import MultipleCheckboxes from '@/components/MultipleCheckboxes.vue';
import RadioInputs from '@/components/RadioInputs.vue';
import SelectInputs from '@/components/SelectInputs.vue';

@Component({
    components: {
        SectionComponent,
        CodeSnippet,
        DefaultInputValues,
        TextInputs,
        CheckboxInputs,
        MultipleCheckboxes,
        RadioInputs,
        SelectInputs
    }
})
export default class InputBinding extends Vue {
    private deafultValues: string = `<template>\n    <div>\n        <input v-model="message" value="Some Default Value">\n    </div>\n    <div>\n        <input value="Some Default Value">\n    </div>\n</template>`;
    private textInputs: string =
    `
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    `;

    private checkboxInputs: string =
    `
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    `;

    private multipleCheckboxes: string =
    `
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    `;

    private radioInputs: string =
    `
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    `;

    private selectInputs: string =
    `
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    `;

    private numberMod: string = `<input v-model.number="age" type="number">`;
    private trimMod: string = `<input v-model.trim="message">`;
}
</script>

<style lang="scss" scoped>

</style>