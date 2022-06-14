<script setup>
const props = defineProps({
    letter: {
        type: String,
        default: "",
    }
})
</script>

<template>
    <div class="flex items-center justify-center h-16 col-span-1 uppercase transition-all duration-300 transform border-2 border-gray-200">
        {{ letter }}
    </div>
</template>