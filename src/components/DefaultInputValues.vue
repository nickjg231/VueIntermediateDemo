<template>
    <div>
        <div class="input-container">
            <input v-model="message" value="Some Default Value"/>
        </div>
        <div class="input-container">
            <input value="Some Default Value"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private message: string = 'Default from Vue\'s data';
}
</script>

<style lang="scss" scoped>

</style>