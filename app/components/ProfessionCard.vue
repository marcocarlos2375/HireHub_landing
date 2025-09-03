<template>
    <div 
        class="w-[400px] h-[400px] rounded-lg group  hover:scale-[1.02] transition-all duration-500 relative overflow-hidden bg-cover bg-center cursor-pointer transform perspective-1000 hover:rotate-y-1 hover:-rotate-x-1" 
        :class="bgClass"
        @mouseenter="$emit('hover', true)"
        @mouseleave="$emit('hover', false)"
    >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-75"></div>
        <div class="absolute bottom-0 w-full h-2/5 backdrop-blur-xl rounded-b-lg p-5 transition-all duration-500 group-hover:h-3/5 ">
            <h3 class="text-white text-3xl pb-2 font-semibold">{{ title }}</h3>
            <p class="text-white/90 pt-0 text-sm leading-relaxed">{{ jobs.join(', ') }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    jobs: {
        type: Array,
        required: true
    },
    bgClass: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.group {
   background-size: cover !important;
    transition: all 0.5s ease;
}


</style>
