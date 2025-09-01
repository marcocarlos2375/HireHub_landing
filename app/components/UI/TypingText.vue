<template>
<span class="typing-text" :style="{ color: textColor }">
  <span :class="['typed', { selected: isSelected }]">{{ displayText }}</span>
  <span
    class="caret"
    :class="{
      blink: caretAnimation === 'blink',
      solid: caretAnimation !== 'blink'
    }"
    :style="{ color: textColor }"
    aria-hidden="true"
  >|</span>
</span>
</template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  type EraseStyle = 'backspace' | 'select-all'
  type Caret = 'blink' | 'solid'
  
  const props = withDefaults(defineProps<{
    text: string[]                      // strings to cycle through
    repeat?: number | typeof Infinity   // number of loops or Infinity
    shuffle?: boolean
    initialAction?: 'typing'
    preTypeDelay?: number
    typeDelay?: number
    preEraseDelay?: number
    eraseDelay?: number
    eraseStyle?: EraseStyle
    eraseOnComplete?: boolean
    caretAnimation?: Caret
    textColor?: string
  }>(), {
    repeat: Infinity,
    shuffle: false,
    initialAction: 'typing',
    preTypeDelay: 70,
    typeDelay: 70,
    preEraseDelay: 2000,
    eraseDelay: 250,
    eraseStyle: 'backspace',
    eraseOnComplete: false,
    caretAnimation: 'blink',
    textColor: 'inherit'
  })
  
  /* ---------------- state ---------------- */
  const displayText = ref('')
  const isSelected = ref(false)
  const idx = ref(0)           // index in texts
  const loops = ref(0)         // completed loops
  let cancelled = false
  const timeouts: number[] = []
  
  /* -------------- data prep -------------- */
  function shuffleArray<T>(arr: T[]) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }
  
  const texts = computed(() => props.shuffle ? shuffleArray(props.text) : [...props.text])
  
  /* -------------- helpers --------------- */
  function sleep(ms: number) {
    return new Promise<void>(resolve => {
      const id = window.setTimeout(() => resolve(), ms)
      timeouts.push(id)
    })
  }
  
  async function typeString(str: string) {
    await sleep(props.preTypeDelay)
    for (let i = 0; i < str.length && !cancelled; i++) {
      displayText.value = str.slice(0, i + 1)
      await sleep(props.typeDelay)
    }
  }
  
  async function eraseBackspace() {
    await sleep(props.preEraseDelay)
    const text = displayText.value
    for (let i = text.length; i >= 0 && !cancelled; i--) {
      displayText.value = text.slice(0, i - 1)
      await sleep(props.eraseDelay)
    }
  }
  
  async function eraseSelectAll() {
    await sleep(props.preEraseDelay)
    isSelected.value = true
    await sleep(props.eraseDelay)       // pause while “selected”
    displayText.value = ''
    isSelected.value = false
  }
  
  async function erase() {
    if (props.eraseStyle === 'select-all') {
      await eraseSelectAll()
    } else {
      await eraseBackspace()
    }
  }
  
  /* --------------- main loop ------------- */
  async function run() {
    if (!texts.value.length) return
    while (!cancelled) {
      const current = texts.value[idx.value]
  
      // type the current string
      await typeString(current)
      if (cancelled) break
  
      // stop at the end if eraseOnComplete=false AND this is final string
      const isLastString = idx.value === texts.value.length - 1
      const maxLoopsReached =
        props.repeat !== Infinity && loops.value >= (props.repeat ?? 0)
  
      if (isLastString && !props.eraseOnComplete && maxLoopsReached) break
  
      // erase
      await erase()
      if (cancelled) break
  
      // move to next
      idx.value = (idx.value + 1) % texts.value.length
  
      if (idx.value === 0) {
        loops.value++
        if (props.repeat !== Infinity && loops.value >= (props.repeat ?? 0)) {
          // final cycle: if eraseOnComplete=false we already stopped above
          if (props.eraseOnComplete) break
        }
      }
    }
  }
  
  /* ------------- lifecycle --------------- */
  onMounted(() => {
    cancelled = false
    run()
  })
  
  onBeforeUnmount(() => {
    cancelled = true
    timeouts.forEach(id => clearTimeout(id))
  })
  </script>
  
  <style scoped>
  .typing-text {
  display: inline-flex;
  align-items: baseline;
  font: inherit;
  white-space: pre;
  color: inherit;
}
  
  .typed {
    position: relative;
    user-select: none;
  }
  
  /* simulate "select-all" highlighting */
  .selected {
    background: currentColor;
    color: #fff;
    transition: background 0.1s;
  }
  
  /* caret */
  .caret {
    display: inline-block;
    margin-left: 2px;
  }
  
  .caret.blink {
    animation: blink 1s steps(2, start) infinite;
  }
  .caret.solid {
    animation: none;
  }
  
  @keyframes blink {
    0%, 49% { opacity: 1 }
    50%, 100% { opacity: 0 }
  }
  </style>
  