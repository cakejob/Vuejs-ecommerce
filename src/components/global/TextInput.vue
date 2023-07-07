<template>
    <div class="mb-4">
        <label class="
                block 
                uppercase 
                tracking-wide 
                text-xs 
                font-bold 
                mb-2 
            ">{{ label }}</label>
        <input :type="inputType" :placeholder="placeHolder" v-model="inputComputed" class="appearance-none
                block
                w-full
                bg-white
                text-gray-700
                border
                border-gray-400
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500" />

        <span v-if="error">{{ error }}</span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, computed } from 'vue'

const emit = defineEmits(['update:inputValue'])

const props = defineProps({
    label: String,
    labelColor: { type: Boolean, default: true },
    inputValue: String,
    placeHolder: { type: String, default: '' },
    inputType: String,
    error: String
});

const { label, labelColor, inputValue, placeholder, error } = toRefs(props)

const inputComputed = computed({
    get: () => inputValue.value,
    set: (val) => emit('update:inputValue', val)
})

</script>