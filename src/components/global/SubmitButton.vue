<template>
    <button class="flex bg-green-500 py-4 px-3 text-white">{{ btnText }}</button>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    btnText: { type: String, default: 'sss' }
})

const { btnText } = toRefs(props);

</script>