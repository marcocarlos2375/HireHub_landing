<template>
  <div class="w-full bg-white py-2">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative mt-10">
        <div class="flex overflow-hidden">
          <!-- Gradient fades -->
          <div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <div class="flex animate-scroll-infinite space-x-24 py-8">
            <div v-for="(company, idx) in [...companies, ...companies]" :key="`${company.name}-${idx}`" class="flex-none">
              <div class="h-16 w-40 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 flex items-center justify-center">
                <img :src="company.logo" :alt="company.name" class="h-20 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companies = [
  { name: 'Samsung', logo: '/svg/companies/Logo=samsung.svg' },
  { name: 'Nokia', logo: '/svg/companies/Logo=nokia.svg' },
  { name: 'Lenovo', logo: '/svg/companies/Logo=lenovo.svg' },
  { name: 'Visa', logo: '/svg/companies/Logo=visa.svg' },
  { name: 'Puma', logo: '/svg/companies/Logo=puma.svg' },
  { name: 'Pepsi', logo: '/svg/companies/Logo=pepsi.svg' },
  { name: 'Skoda', logo: '/svg/companies/Logo=skoda.svg' },
  { name: 'Asus', logo: '/svg/companies/Logo=asus.svg' },
  { name: 'Flipkart', logo: '/svg/companies/Logo=flipkart.svg' },
  { name: 'Vivo', logo: '/svg/companies/Logo=vivo.svg' }
]

</script>

<style>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-scroll-infinite {
  animation: scroll 20s linear infinite;
}
</style>
