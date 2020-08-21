<template>
    <div class="content">
        <div class="counter-display">
            <p>Component A</p>
            The value of the counter in the store is currently: {{ $store.state.count }}.
        </div>
        <div class="incrementer">
            <button @click="incrementCounter()">ADD ONE FROM A</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class SharedStateA extends Vue {
    private incrementCounter(): void {
        this.$store.commit('increment');
    }
}
</script>

<style lang="scss" scoped>

</style>