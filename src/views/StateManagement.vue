<template>
    <section-component>
        <template slot="title">State Management: Vuex and the Store</template>
        <template slot="header">
            Large applications can often grow in complexity, due to multiple pieces of state scattered across many components and the interactions between them.
            <br/><br/>
            What are some examples of state that we, as web application developers, might be interested in?
            <br/>

            <hr>

            <h3>How is state managed and shared in Vue with Vuex?</h3>
            <div class="two-columns">
                <div class="item">
                    <img src="shared-state-diagram.png"/>
                </div>
                <div class="item">
                    <p>We manage shared state by implementing a <b>store</b> pattern.</p>            
                    <p>With this pattern, a single reactive state object can be shared between multiple Vue components.</p>
                    <p>As a simple example, imagine that Component A updates a value in the store. This change would be automatically propagated down to Component B.</p>
                </div>
            </div>
            <hr>

            <h3>Blank Slate: An Empty Store</h3>
            <p>The following is the code you can expect to see in a <code>store.ts</code> file after generating a Vue application in the <code>vue-cli</code>:</p>

            <CodeSnippet :code="blankStore"></CodeSnippet>

            <p>
                What does a functioning store actually look like? Take a simple counter example. All we need to do is provide the initial state and some mutations.
            </p>

            <CodeSnippet :code="simpleStateCounter"></CodeSnippet>

            <p>Now if we want to change the value of the counter, we just have to <code>commit</code> the change to the store:</p>

            <CodeSnippet :code="stateChange"></CodeSnippet>

            <p>What would that look like from inside of a component? Imagine you have a component that contains a button. Every time the button is clicked the store's counter should increment.</p>

            <CodeSnippet :code="incrementCounterTemplate"></CodeSnippet>
            <CodeSnippet :code="incrementCounterScript"></CodeSnippet>

            <hr>

            <h3>The Simple Counter Example</h3>
            <div class="two-columns">
                <div class="item">
                    <SharedState :componentID="'A'"></SharedState>
                </div>
                <div class="item">
                    <SharedState :componentID="'B'"></SharedState>
                </div>
            </div>
        </template>
    </section-component>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CodeSnippet from '@/components/CodeSnippet.vue';
import SectionComponent from '@/components/SectionComponent.vue';
import SharedState from '@/components/SharedState.vue';

@Component({
    components: {
        CodeSnippet,
        SectionComponent,
        SharedState
    }
})
export default class StateManagement extends Vue {
    private blankStore: string =
    `    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export default new Vuex.Store({
        state: {

        },
        mutations: {

        },
        actions: {

        },
    });
    `;

    private simpleStateCounter: string =
    `    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }
    })
    `;

    private stateChange: string =
    `
    store.commit('increment')
    `;

    private incrementCounterTemplate: string =
    `    <template>
        <button v-on:click="increment()">Plus One!</button>
    </template>
    `;

    private incrementCounterScript: string =
    `    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
    `;
}
</script>

<style lang="scss" scoped>
hr {
    margin: 64px auto;
}
</style>
