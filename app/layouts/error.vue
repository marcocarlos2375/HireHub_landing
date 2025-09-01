<template>
    <main class="relative isolate min-h-full">
      <img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 -z-10 size-full object-cover object-top" />
      <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p class="text-base/8 font-semibold text-white text-3xl">{{ error?.statusCode || '404' }}</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">{{ error?.statusMessage || 'Page not found' }}</h1>
        <p class="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">{{ error?.message || 'Sorry, we couldn\'t find the page you\'re looking for.' }}</p>
        <div class="mt-10 flex justify-center">
          <HbButton @click="handleError" class="text-sm/7 font-semibold text-white hover:text-white/90"><span aria-hidden="true">&larr;</span> Back to home</HbButton>
        </div>
      </div>
    </main>
  </template>

<script setup>
import HbButton from '@/components/UI/HbButton.vue'
defineProps({
  error: Object
})

const handleError = () => {
  clearError()
  navigateTo('/')
}
</script>
