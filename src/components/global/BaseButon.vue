<template>
    <label>{{ labelButon }}</label>
    <button class="flex bg-green-500  px-4 py-5 text-white" @click="$emit('showModelEvent', true)">{{ btnText }}</button>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    btnText: { type: String, default: 'ssjkk' },
    labelButon: String
});

const { btnText, labelButon } = toRefs(props);

console.log("Pros button", props)
</script>