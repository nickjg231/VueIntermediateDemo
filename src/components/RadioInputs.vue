<template>
    <div>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>

        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        
        <span>Picked: {{ picked }}</span>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private picked: string = 'One';
}
</script>

<style lang="scss" scoped>

</style>