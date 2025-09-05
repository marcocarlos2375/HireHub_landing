<script setup>
import { ref, onMounted, watch } from 'vue'
import { AVLine } from 'vue-audio-visual'

const props = defineProps({
  audioElement: {
    type: Object,
    required: true,
    validator: (value) => (typeof window === 'undefined') || (value instanceof window.HTMLAudioElement)
  }
})
</script>

<template>
  <AVLine
    :line-width="2"
    :line-color="'#0ea5e9'"
    :src="props.audioElement"
    class="w-full h-8 block rounded"

  />
</template>
