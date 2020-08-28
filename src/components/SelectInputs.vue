<template>
    <div>
        <select v-model="selected">
        <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        
        <br/>
        <span>Selected: {{ selected }}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private selected = [];
}
</script>

<style lang="scss" scoped>

</style>