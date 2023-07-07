<template>
    <label>{{ label }}</label>
    <div>
        <img :src="image" alt="image" />
    </div>
</template>
<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    label: String,
    image: { type: String, default: 'https://www.namepros.com/attachments/empty-png.89209' }
});

const { label, image } = toRefs(props);

</script>