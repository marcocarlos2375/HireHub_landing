<template>
    <div class="bg-white">
      <div class="relative isolate pt-14">
        <div class="py-24 sm:py-32 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Get Interview-Ready with AI</h1>
              <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">With our AI-powered interview simulation tool, you can practice your job interview skills and prepare for success.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
               <HbButton variant="primary">Get started</HbButton>
                <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
  
            <div class="simulation-container">
             
            </div>
          </div>
        </div>
       
      </div>
      <div class="mx-auto max-w-7xl  lg:px-8">
       <div>
        <img src="/svg/prime/Mockup2.svg" class="rounded-lg" alt="">
       </div>
      </div>
    </div>
  </template>

  <style scoped>
  .simulation-container {
    margin-top: 4rem;
    width: 100%;
    height: 600px;
    border-radius: 0.5rem;
    border: 8px solid #e9e9e9;
    background-color: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 640px) {
    .simulation-container {
      margin-top: 6rem;
    }
  }
  </style>

  <script setup>
  import HbButton from '@/components/UI/HbButton.vue'
  import { ref } from 'vue'

  const mobileMenuOpen = ref(false)
  </script>