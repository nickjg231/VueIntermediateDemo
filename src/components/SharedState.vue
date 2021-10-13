<template>
    <div class="content">
        <div class="counter-display">
            <p>Component {{ componentID }}</p>
            The value of the counter in the store is currently: {{ $store.state.count }}.
        </div>
        <div class="incrementer">
            <button @click="incrementCounter()">ADD ONE FROM {{componentID}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class SharedState extends Vue {
    @Prop() private componentID!: string;

    private incrementCounter(): void {
        this.$store.commit('increment');
    }
}
</script>

<style lang="scss" scoped>

</style>