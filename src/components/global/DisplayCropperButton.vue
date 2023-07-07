<template>
    <label>
        {{ label }}}
    </label>
    <button> {{ btnText }}</button>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
const props = defineProps({
    label: String,
    btnText: String
})

const { label, btnText } = toRefs(props);

</script>