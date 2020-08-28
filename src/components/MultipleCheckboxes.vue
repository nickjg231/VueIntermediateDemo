<template>
    <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private checkedNames = [];
}
</script>

<style lang="scss" scoped>

</style>