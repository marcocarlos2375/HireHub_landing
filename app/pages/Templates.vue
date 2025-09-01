<template>
  <div class=" min-h-screen">
    <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div>
        <h1 class="text-4xl tracking-tight text-primary " v-motion-slide-visible-once-bottom>Resume templates </h1>
        <p class="mt-2 text-sm ">Professional resume templates designed to highlight your skills and experience. Each
          template comes with multiple color schemes and customization options.</p>

      </div>
      <div class="filter mt-8">
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="type in resumeTypes" 
            :key="type"
            @click="selectedType = type"
            class="px-4 py-2 rounded-full text-sm transition-all duration-200"
            :class="selectedType === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div class="relative mt-8 lg:mt-12" v-motion-slide-visible-once-bottom>
        <div class="flex items-center justify-center gap-2 mb-6 lg:hidden">
          <div v-for="i in Math.ceil(products.length / 3)" :key="i"
            class="h-1 w-6 rounded-full transition-colors duration-300"
            :class="i === currentPage ? 'bg-primary-600' : 'bg-gray-300'"></div>
        </div>
        <div class="relative">
          <button
            class="absolute left-2 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/80 backdrop-blur rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
            :class="{ 'opacity-0 pointer-events-none': !canScrollLeft }"
            @click="scrollContainer?.scrollBy({ left: -scrollContainer.clientWidth, behavior: 'smooth' })">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 z-10 lg:hidden bg-white/80 backdrop-blur rounded-full p-2 shadow-md hover:bg-white/90 transition-colors"
            :class="{ 'opacity-0 pointer-events-none': !canScrollRight }"
            @click="scrollContainer?.scrollBy({ left: scrollContainer.clientWidth, behavior: 'smooth' })">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div ref="scrollContainer"
            class="relative w-full overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-0 scrollbar-none">
            <ul role="list"
              class="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] gap-x-4 sm:gap-x-6 lg:grid-flow-row lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 xl:gap-x-12 lg:gap-y-16 pb-4 lg:pb-0">
              <template v-for="(product, index) in filteredProducts" :key="product.id">
                <li
                class="flex flex-col text-center snap-center snap-always">
                <div class="group relative">
                  <div class="relative overflow-hidden rounded-lg bg-[#eff2f9] p-6">
                    <img :src="product.imageSrc" :alt="product.imageAlt"
                      class="w-full rounded-lg object-contain aspect-[3/4] group-hover:opacity-90 transition-all duration-500 group-hover:scale-[1.02]" />
                    <div
                      class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/10 flex items-center justify-center">
                      <HbButton variant="primary" size="xl"
                        class="transform scale-95 translate-y-4 opacity-0 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300  "
                        @click.stop="useTemplate(product)">Use this template</HbButton>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h3 class="text-base font-medium text-gray-900">
                      <a :href="product.href">
                        <span class="absolute inset-0" />
                        {{ product.name }}
                      </a>
                    </h3>
                    <!--format-->
                    <span class="text-sm text-gray-500">{{ product.formats.join(', ') }}</span>
                    <div class="mt-3 flex items-center justify-center gap-3">

                      <span class="text-sm text-gray-500">·</span>
                      <p class="text-sm text-gray-500">{{ product.description }} </p>
                    </div>
                  </div>
                </div>

                <h4 class="sr-only">Available colors</h4>
                <ul role="list" class="mt-4 flex items-center justify-center space-x-3">
                  <li v-for="color in product.availableColors" :key="color.name" class="size-4 rounded-full"
                    :style="{ backgroundColor: color.colorBg }">
                    <span class="sr-only">{{ color.name }}</span>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex px-4 sm:hidden">
        <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          v-motion-slide-visible-once-right>
          View all templates
          <span aria-hidden="true"> &rarr;</span>
        </a>
          <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            v-motion-slide-visible-once-right>
            View all templates
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import HbButton from '../components/UI/HbButton.vue'

const resumeTypes = ['All', 'Modern', 'Simple', 'Photo', 'Two Column', 'One Column']
const selectedType = ref('All')
const currentPage = ref(1)
const scrollContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

function useTemplate(template) {
  console.log('Using template:', template.name)
  // Add your template selection logic here
}

function updateScrollState() {
  if (!scrollContainer.value) return
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  const maxPage = Math.ceil(products.length / 3)
  currentPage.value = Math.min(Math.floor(scrollLeft / clientWidth) + 1, maxPage)
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft + clientWidth < scrollWidth
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateScrollState)
    updateScrollState()
  }
})

const filteredProducts = computed(() => {
  if (selectedType.value === 'All') return products.value
  return products.value.filter(product => product.type === selectedType.value)
})

const products = ref([
  {
    id: 1,
    name: 'Modern Professional',
    color: 'Blue',
    price: '$15',
    href: '#',
    imageSrc: '/templates/Template 11.png',
    imageAlt: 'Modern professional resume template with clean layout',
    description: 'Modern professional resume template with clean layout',
    formats: ['PDF', 'DOCX'],
    type: 'Modern',
    availableColors: [
      { name: 'Navy', colorBg: '#1E3A8A' },
      { name: 'Purple', colorBg: '#5B21B6' },
      { name: 'Teal', colorBg: '#0F766E' },
    ],
  },
  {
    id: 2,
    name: 'Creative Minimal',
    color: 'Black',
    price: '$12',
    href: '#',
    imageSrc: '/templates/Template 21.png',
    imageAlt: 'Minimalist creative resume template with modern typography',
    description: 'Minimalist creative resume template with modern typography',
    formats: ['PDF', 'DOCX'],
    type: 'Photo',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Wine', colorBg: '#9F1239' },
      { name: 'Forest', colorBg: '#064E3B' },
    ],
  },
  {
    id: 3,
    name: 'Executive Plus',
    color: 'Dark',
    price: '$18',
    href: '#',
    imageSrc: '/templates/Template 23.png',
    imageAlt: 'Executive style resume template with professional layout',
    description: 'Executive style resume template with professional layout',
    formats: ['PDF', 'DOCX'],
    type: 'Simple',
    availableColors: [
      { name: 'Dark', colorBg: '#111827' },
      { name: 'Crimson', colorBg: '#991B1B' },
      { name: 'Ocean', colorBg: '#155E75' },
    ],
  },
  {
    id: 4,
    name: 'Clean Corporate',
    color: 'Gray',
    price: '$15',
    href: '#',
    imageSrc: '/templates/Template 27.png',
    imageAlt: 'Clean corporate resume template with modern design',
    description: 'Clean corporate resume template with modern design',
    formats: ['PDF', 'DOCX'],
    type: 'One Column',
    availableColors: [
      { name: 'Zinc', colorBg: '#3F3F46' },
      { name: 'Sapphire', colorBg: '#1D4ED8' },
      { name: 'Pine', colorBg: '#047857' },
    ],
  },
  {
    id: 5,
    name: 'Professional Elite',
    color: 'Blue',
    price: '$18',
    href: '#',
    imageSrc: '/templates/Template 29.png',
    imageAlt: 'Elite professional resume template with modern design',
    description: 'Elite professional resume template with modern design',
    formats: ['PDF', 'DOCX'],
    type: 'Modern',
    availableColors: [
      { name: 'Royal', colorBg: '#1E3A8A' },
      { name: 'Plum', colorBg: '#7E22CE' },
      { name: 'Jade', colorBg: '#065F46' },
    ],
  },
  {
    id: 6,
    name: 'Contemporary Classic',
    color: 'Navy',
    price: '$15',
    href: '#',
    imageSrc: '/templates/Template 30.png',
    imageAlt: 'Contemporary classic resume template with clean layout',
    description: 'Contemporary classic resume template with clean layout',
    formats: ['PDF', 'DOCX'],
    type: 'Two Column',
    availableColors: [
      { name: 'Navy', colorBg: '#1E3A8A' },
      { name: 'Purple', colorBg: '#5B21B6' },
      { name: 'Teal', colorBg: '#0F766E' },
    ],
  },
  {
    id: 7,
    name: 'Modern Elegance',
    color: 'Dark',
    price: '$18',
    href: '#',
    imageSrc: '/templates/Template 35.png',
    imageAlt: 'Elegant modern resume template with professional design',
    description: 'Elegant modern resume template with professional design',
    formats: ['PDF', 'DOCX'],
    type: 'Simple',
    availableColors: [
      { name: 'Dark', colorBg: '#111827' },
      { name: 'Rose', colorBg: '#BE123C' },
      { name: 'Amber', colorBg: '#B45309' },
    ],
  },
  {
    id: 8,
    name: 'Premium Executive',
    color: 'Blue',
    price: '$20',
    href: '#',
    imageSrc: '/templates/Template 38.png',
    imageAlt: 'Premium executive resume template with sophisticated layout',
    description: 'Premium executive resume template with sophisticated layout',
    formats: ['PDF', 'DOCX'],
    type: 'Modern',
    availableColors: [
      { name: 'Blue', colorBg: '#1E40AF' },
      { name: 'Indigo', colorBg: '#3730A3' },
      { name: 'Emerald', colorBg: '#047857' },
    ],
  },
  {
    id: 9,
    name: 'Creative Professional',
    color: 'Gray',
    price: '$15',
    href: '#',
    imageSrc: '/templates/Template 39.png',
    imageAlt: 'Creative professional resume template with modern design',
    description: 'Creative professional resume template with modern design',
    formats: ['PDF', 'DOCX'],
    type: 'Photo',
    availableColors: [
      { name: 'Slate', colorBg: '#334155' },
      { name: 'Violet', colorBg: '#6D28D9' },
      { name: 'Cyan', colorBg: '#0E7490' },
    ],
  },
  {
    id: 10,
    name: 'Business Elite',
    color: 'Dark',
    price: '$18',
    href: '#',
    imageSrc: '/templates/Template 49.png',
    imageAlt: 'Elite business resume template with professional layout',
    description: 'Elite business resume template with professional layout',
    formats: ['PDF', 'DOCX'],
    type: 'Simple',
    availableColors: [
      { name: 'Dark', colorBg: '#111827' },
      { name: 'Pink', colorBg: '#DB2777' },
      { name: 'Orange', colorBg: '#EA580C' },
    ],
  },
  {
    id: 11,
    name: 'Modern Impact',
    color: 'Blue',
    price: '$15',
    href: '#',
    imageSrc: '/templates/Template 54.png',
    imageAlt: 'Modern impact resume template with striking design',
    description: 'Modern impact resume template with striking design',
    formats: ['PDF', 'DOCX'],
    type: 'Modern',
    availableColors: [
      { name: 'Sky', colorBg: '#0369A1' },
      { name: 'Fuchsia', colorBg: '#A21CAF' },
      { name: 'Lime', colorBg: '#3F6212' },
    ],
  },
])
</script>