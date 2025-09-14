<template>
  <div>
    <div class="relative isolate  bg-primary-900 pt-14">
      <div class="py-24 sm:py-32 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Get Interview-Ready
              with AI</h1>
            <p class="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">With our AI-powered interview
              simulation tool, you can practice your job interview skills and prepare for success.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <HbButton variant="primary">Get started</HbButton>
              <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
            <br></br>
            <img src="/ill/interview.png" class="rounded-lg" alt=""></img>
          </div>

          <div class="simulation-container">
           
          </div>
        </div>
      </div>

    </div>
    <div class="mx-auto max-w-7xl mt-8 lg:px-8">
      <div>
        <img src="/svg/prime/Mockup2.svg" class="rounded-lg" alt="">
      </div>
    </div>
    <div class="bg-primary-100 mt-8">
      <div class="avatar mx-auto max-w-7xl pt-20 px-8">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Choose Between many
          Avatars For Your <span class="text-primary">Interview Simulation.</span></h2>
        <div class="mt-2 text-pretty text-gray-600 ">With our AI-powered interview simulation tool,
          you can practice your job interview skills and prepare for success.</div>
        <div class="py-8">
          <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li v-for="person in people" :key="person.email"
              class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg  text-center  ">
              <div class="flex flex-1 flex-col p-8 relative group">
                <div class="relative mx-auto">
                  <img
                    class="size-52 shrink-0 rounded-lg bg-gray-300 outline -outline-offset-1 outline-black/5 transition-transform duration-300 group-hover:scale-105"
                    :src="person.imageUrl" :alt="person.name" />
                  <div v-if="failedPreloads.some(fp => fp.name === person.name)"
                    class="absolute top-2 right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                    :title="`Failed to load audio: ${failedPreloads.find(fp => fp.name === person.name)?.error}`">
                    <ExclamationTriangleIcon class="h-4 w-4 text-white" />
                  </div>
                  <div class="relative">
                    <button @click="toggleAudio(person)"
                      class="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/80 transition-all duration-200 flex items-center gap-2 hover:scale-105">
                      <PlayIcon v-if="!person.isPlaying" class="size-5 text-white" />
                      <PauseIcon v-else class="size-5 text-white" />
                      <span class="text-sm font-medium text-white">Listen</span>
                    </button>
                  </div>
                </div>
                <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
                <dl class="mt-1 flex grow flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-sm text-gray-500">{{ person.title }}</dd>

                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sticky Audio Player -->
    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition ease-in duration-200"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-full opacity-0">
      <div v-if="currentPerson && isAudioPlaying" class="fixed bottom-0 left-0 right-0 px-2 sm:px-4 mb-2 sm:mb-4 z-50">
        <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        <div
          class="relative max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-between rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-xl shadow-lg border border-white/10 p-3 sm:p-4 transition-all duration-300 ease-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 hover:-translate-y-0.5 hover:bg-black/25">
          <div class="flex items-center gap-4">
            <div class="relative group/avatar">
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 blur-xl group-hover/avatar:opacity-100 opacity-0 transition-opacity duration-300 scale-150">
              </div>
              <img :src="currentPerson.imageUrl"
                class="relative h-12 w-12 rounded-full object-cover ring-2 ring-white/20 transition-transform duration-300 group-hover/avatar:scale-105"
                :alt="currentPerson.name">
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-white">{{ currentPerson.name }}</span>
              <span class="text-xs text-white/70">{{ currentPerson.title }}</span>
            </div>
          </div>
          <div class="flex-1 w-full sm:mx-8">
            <div class="flex flex-col gap-2 items-center justify-center">
              <div class="flex items-center gap-2 w-full max-w-full sm:max-w-md">
                <span class="hidden sm:inline text-xs text-white/70 w-12 text-right">{{ formatTime(audioProgress)
                  }}</span>
                <div
                  class="flex-1 h-0.5 bg-black/10 backdrop-blur-sm rounded-full overflow-hidden relative cursor-pointer group w-full sm:w-64 transition-all duration-300 ease-out hover:h-1 hover:shadow-[0_0_5px_rgba(255,255,255,0.3)] hover:scale-y-110"
                  @click="seekAudio($event)" @mousemove="updatePreview($event)" @mouseleave="hidePreview">
                  <div
                    class="h-full bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out group-hover:bg-black/80 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] group-hover:after:translate-x-[200%] after:transition-transform after:duration-1000 after:ease-out"
                    :style="{ width: (audioProgress / audioDuration) * 100 + '%' }"></div>
                  <div class="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="w-full h-full bg-black/5 backdrop-blur-sm"></div>
                  </div>
                  <Transition enter-active-class="transition ease-out duration-150"
                    enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1">
                    <div v-if="previewTime !== null"
                      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                      <div
                        class="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-700 bg-black/80 backdrop-blur-sm text-white rounded-full shadow-lg whitespace-nowrap"
                        :style="{ left: previewPosition + 'px' }">
                        {{ formatTime(previewTime) }}
                      </div>
                    </div>
                  </Transition>
                </div>
                <span class="hidden sm:inline text-xs text-white/70 w-12">{{ formatTime(audioDuration) }}</span>
              </div>
            </div>
          </div>
          <div class="relative flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105">
            <div class="relative" @mouseleave="isVolumeVisible = false">
              <button @mouseenter="isVolumeVisible = true" @click="toggleMute"
                class="rounded-full p-2.5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <SpeakerXMarkIcon v-if="volume === 0" class="size-5 text-white" />
                <SpeakerLowIcon v-else-if="volume <= 0.5" class="size-5 text-white" />
                <SpeakerWaveIcon v-else class="size-5 text-white" />
              </button>
              <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <div v-if="isVolumeVisible"
                  class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 sm:p-3 bg-black/20 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-lg border border-white/10 flex flex-col gap-1.5 sm:gap-2 animate-in slide-in-from-bottom-2 duration-300">
                  <input type="range" min="0" max="1" step="0.1" v-model="volume" class="w-20 sm:w-24">
                  <span class="text-xs text-white/70 transition-colors duration-200 hover:text-white">{{
                    Math.round(volume * 100) }}%</span>
                </div>
              </Transition>
            </div>
            <button @click="togglePlayback"
              class="rounded-full p-2.5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              <PauseIcon v-if="isPlaying" class="size-5 text-white" />
              <PlayIcon v-else class="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
    <Transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
      <div v-if="isErrorVisible"
        class="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>


@media (min-width: 640px) {
  .simulation-container {
    margin-top: 6rem;
  }
}
</style>

<script setup>
import HbButton from '@/components/UI/HbButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { PlayIcon, PauseIcon, SpeakerXMarkIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
import { SpeakerWaveIcon as SpeakerLowIcon } from '@heroicons/vue/24/outline'
import { SpeakerWaveIcon } from '@heroicons/vue/24/solid'

const people = [
  {
    name: 'Anna Müller',
    title: 'Friendly & Upbeat',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"Aloy",
    audioSample: '/audio/anna.mp3',
    imageUrl: '/avatars/1.png',
  },
  {
    name: 'Camila Torres',
    title: 'Energetic & Supportive',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"coral",
    audioSample: '/audio/camilla.mp3',
    imageUrl: '/avatars/2.png',
  },
  {
    name: 'David Johnson',
    title: 'Calm & Professional',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"echo",
    audioSample: '/audio/david.mp3',
    imageUrl: '/avatars/3.png',
  },
  {
    name: 'Karim Haddad',
    title: 'Professional & Warm',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"Fable",
    audioSample: '/audio/karim.mp3',
    imageUrl: '/avatars/4.png',
  },
  {
    name: 'Sophie Dubois',
    title: 'Inspiring & Supportive',
    role: 'English',
    gtpvoice:"nova",
    isPlaying: false,
    isLoading: false,
    audioSample: '/audio/sophie.mp3',
    imageUrl: '/avatars/5.png',
  },
  {
    name: 'Mei Lin',
    title: 'Calm & Reassuring',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    audioSample: '/audio/mei.mp3',
    imageUrl: '/avatars/6.png',
  },
  {
    name: 'Luca Romano',
    title: 'Relaxed & Friendly',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"onyx",
    audioSample: '/audio/luca.mp3',
    imageUrl: '/avatars/7.png',
  },
  {
    name: 'Priya Sharma',
    title: 'Empathetic & Encouraging',
    role: 'English',
    isPlaying: false,
    isLoading: false,
    gtpvoice:"shimmer",
    audioSample: '/audio/priya.mp3',
    imageUrl: '/avatars/8.png',
  },
]


const mobileMenuOpen = ref(false)

// Audio functionality
const currentAudio = ref(null)
const currentPerson = ref(null)
const audioProgress = ref(0)
const audioDuration = ref(0)
const isAudioPlaying = ref(false)
const volume = ref(1)
const previousVolume = ref(1)
const isVolumeVisible = ref(false)
const previewTime = ref(null)
const previewPosition = ref(0)

const toggleMute = () => {
  if (volume.value > 0) {
    previousVolume.value = volume.value
    volume.value = 0
  } else {
    volume.value = previousVolume.value
  }
  updateVolume()
}


const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const updateAudioProgress = () => {
  if (currentAudio.value) {
    audioProgress.value = currentAudio.value.currentTime
    audioDuration.value = currentAudio.value.duration || 0
  }
}

const updateVolume = () => {
  if (currentAudio.value) {
    currentAudio.value.volume = volume.value
  }
}

const updatePreview = (event) => {
  if (audioDuration.value) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const percentage = x / rect.width
    previewTime.value = percentage * audioDuration.value
    previewPosition.value = x
  }
}

const hidePreview = () => {
  previewTime.value = null
}

const seekAudio = (event) => {
  if (currentAudio.value) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const percentage = x / rect.width
    const newTime = percentage * audioDuration.value
    currentAudio.value.currentTime = newTime
    audioProgress.value = newTime
  }
}

const errorMessage = ref('')
const isErrorVisible = ref(false)
const isLoading = ref(false)

const showError = (message) => {
  errorMessage.value = message
  isErrorVisible.value = true
  setTimeout(() => {
    isErrorVisible.value = false
  }, 5000)
}

const preloadAudio = async (audioSample) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(audioSample)
    audio.addEventListener('canplaythrough', () => resolve(audio), { once: true })
    audio.addEventListener('error', reject, { once: true })
    audio.load()
  })
}

const loadingProgress = ref(0)
const totalFiles = ref(0)
const loadedFiles = ref(0)

const resetLoadingState = () => {
  loadingProgress.value = 0
  totalFiles.value = 0
  loadedFiles.value = 0
  people.forEach(person => person.isLoading = false)
}

const failedPreloads = ref([])

const preloadAllAudio = async () => {
  resetLoadingState()
  failedPreloads.value = []
  const audioFiles = people.filter(p => p.audioSample)
  totalFiles.value = audioFiles.length

  try {
    const preloadPromises = audioFiles.map(async person => {
      try {
        person.isLoading = true
        await new Promise((resolve, reject) => {
          const audio = new Audio(person.audioSample)
          audio.addEventListener('canplaythrough', resolve, { once: true })
          audio.addEventListener('error', () => reject(new Error('Failed to load audio')), { once: true })
          audio.load()
        })
        loadedFiles.value++
        loadingProgress.value = (loadedFiles.value / totalFiles.value) * 100
      } catch (error) {
        failedPreloads.value.push({
          name: person.name,
          error: error.message || 'Unknown error'
        })
      } finally {
        person.isLoading = false
      }
    })

    await Promise.all(preloadPromises)
  } catch (error) {
    console.error('Error preloading audio files:', error)
  } finally {
    // Always reset states at the end
    people.forEach(person => person.isLoading = false)
    isLoading.value = false
    loadingProgress.value = 100
    loadedFiles.value = totalFiles.value

    if (failedPreloads.value.length > 0) {
      showError(`Failed to preload audio for ${failedPreloads.value.length} interviewer(s). Some features may be limited.`)
    }
  }
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    stopSpeaking()
  }
}

onMounted(() => {
  preloadAllAudio()
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  // Reset all states when component is unmounted
  resetLoadingState()
  people.forEach(person => {
    person.isLoading = false
    person.isPlaying = false
  })
  isLoading.value = false
  loadingProgress.value = 0
  currentAudio.value = null
  currentPerson.value = null
  isAudioPlaying.value = false

  // Stop any ongoing speech synthesis
  stopSpeaking()

  // Remove event listener
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})

const isSpeaking = ref(false)
const currentSpeakingPerson = ref(null)
const isLoadingSpeech = ref(false)

const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    isSpeaking.value = false
    currentSpeakingPerson.value = null
    isLoadingSpeech.value = false
  }
}

const startSpeech = async (person, voices) => {
  try {
    isLoadingSpeech.value = true
    currentSpeakingPerson.value = person

    // If already speaking for this person, stop
    if (isSpeaking.value && currentSpeakingPerson.value === person) {
      stopSpeaking()
      return
    }

    // Stop any previous speech
    stopSpeaking()

    const text = `Hello, I'm ${person.name}, and I'll be your interviewer today. I specialize in ${person.title} interviews and I'm here to help you practice and improve your skills.`
    const msg = new SpeechSynthesisUtterance(text)

    // Try to find a good English voice
    const englishVoices = voices.filter(voice => voice.lang.startsWith('en-'))
    if (englishVoices.length > 0) {
      // Prefer voices that sound more natural
      const preferredVoice = englishVoices.find(voice =>
        voice.name.includes('Natural') ||
        voice.name.includes('Premium') ||
        voice.name.includes('Enhanced')
      ) || englishVoices[0]
      msg.voice = preferredVoice
    }

    msg.lang = 'en-US'
    msg.rate = 0.9 // Slightly slower for better clarity
    msg.pitch = 1.1 // Slightly higher pitch for more engaging tone
    msg.volume = 1.0

    msg.onend = () => {
      isSpeaking.value = false
      currentSpeakingPerson.value = null
    }

    msg.onerror = (event) => {
      console.error('Speech synthesis error:', event)
      showError('Error during speech synthesis. Please try again.')
      isSpeaking.value = false
      currentSpeakingPerson.value = null
    }

    isSpeaking.value = true
    window.speechSynthesis.speak(msg)
    isLoadingSpeech.value = false
  } catch (error) {
    console.error('Speech synthesis error:', error)
    showError('Error starting speech synthesis')
    isSpeaking.value = false
    currentSpeakingPerson.value = null
    isLoadingSpeech.value = false
  }
}

const speak = (person) => {
  if (!('speechSynthesis' in window)) {
    showError('Speech synthesis is not supported in your browser. Please try a modern browser like Chrome or Safari.')
    isLoadingSpeech.value = false
    currentSpeakingPerson.value = null
    return
  }

  // Get available voices
  let voices = window.speechSynthesis.getVoices()

  // If voices aren't loaded yet, wait for them
  if (voices.length === 0) {
    return new Promise((resolve) => {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices()
        if (voices.length > 0) {
          resolve()
          startSpeech(person, voices)
        } else {
          showError('No speech synthesis voices available')
          isLoadingSpeech.value = false
          currentSpeakingPerson.value = null
        }
      }
    })
  }

  // If voices are already loaded, start speech directly
  startSpeech(person, voices)
}

const toggleAudio = async (person) => {
  // Stop any ongoing speech when starting audio playback
  stopSpeaking()

  console.log('Toggle audio called for person:', person.name)

  // Prevent multiple clicks while loading
  if (person.isLoading) {
    console.log('Person is already loading, ignoring click')
    return
  }

  // If audio is currently playing, stop it
  if (currentAudio.value) {
    console.log('Stopping current audio')
    try {
      currentAudio.value.pause()
      resetAudioState(currentPerson.value)
    } catch (error) {
      showError('Error stopping playback')
      console.error('Error stopping playback:', error)
    }
    return
  }

  if (person.audioSample) {
    try {
      // Set loading state before any async operations
      person.isLoading = true
      isLoading.value = true

      const audio = new Audio(person.audioSample)

      // Set up event handlers before starting playback
      audio.onerror = (e) => {
        console.error('Audio loading error:', e)
        showError('Error loading audio file')
        resetAudioState(person)
      }

      audio.onended = () => {
        console.log('Audio playback ended')
        resetAudioState(person)
      }

      audio.oncanplay = () => {
        console.log('Audio can play now')
      }

      audio.onplay = () => {
        console.log('Audio started playing')
      }

      audio.ontimeupdate = () => {
        updateAudioProgress()
        console.log('Audio time:', audio.currentTime)
      }

      audio.volume = volume.value

      // Wait for audio to be ready
      await new Promise((resolve, reject) => {
        audio.addEventListener('canplaythrough', resolve, { once: true })
        audio.addEventListener('error', reject, { once: true })
        audio.load()
      })

      // Start playback
      await audio.play()

      // Update states after successful play
      person.isPlaying = true
      person.isLoading = false
      currentAudio.value = audio
      isAudioPlaying.value = true
      currentPerson.value = person
      isLoading.value = false
    } catch (error) {
      showError('Error loading or playing audio')
      console.error('Audio error:', error)
      resetAudioState(person)
    }
  }
}

const resetAudioState = (person) => {
  person.isPlaying = false
  person.isLoading = false
  currentAudio.value = null
  isAudioPlaying.value = false
  currentPerson.value = null
  isLoading.value = false
}
</script>