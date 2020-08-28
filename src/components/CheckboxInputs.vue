<template>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private checked: boolean = false;
}
</script>

<style lang="scss" scoped>

</style>