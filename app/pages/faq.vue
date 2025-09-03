<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <dl class="mt-16 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="py-6 first:pt-0 last:pb-0" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                <span class="text-base/7 font-semibold">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base/7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>


  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
    {
      question: "How does HireHub AI improve my resume?",
      answer:
        "HireHub AI analyzes your resume using advanced machine learning algorithms to optimize content, format, and keywords. It ensures ATS compatibility, highlights your key achievements, and tailors your resume to specific job descriptions, significantly increasing your chances of getting noticed by employers.",
    },
    {
      question: 'Is my data secure with HireHub AI?',
      answer:
        'Absolutely. We take data security seriously. All your personal information and resume data is encrypted using industry-standard protocols. We never share your information with third parties without your explicit consent, and you maintain full control over your data.',
    },
    {
      question: 'How does the AI interview preparation work?',
      answer:
        'Our AI interview preparation system uses natural language processing to simulate real interview scenarios. It provides personalized questions based on your resume and target role, offers real-time feedback on your responses, and helps you improve your interview skills through practice sessions.',
    },
    {
      question: 'What makes HireHub AI different from other resume builders?',
      answer:
        "Unlike traditional resume builders, HireHub AI provides dynamic, personalized recommendations based on real-time job market data. Our AI continuously learns from successful applications, ensuring your resume follows the latest industry standards and best practices.",
    },
    {
      question: "Can I use HireHub AI for different industries and job levels?",
      answer:
        "Yes! HireHub AI is designed to cater to all career levels and industries. Whether you are a fresh graduate, mid-level professional, or senior executive, our AI adapts its recommendations to your specific industry, experience level, and career goals."
    },
    {
      question: 'Do you offer human support alongside the AI features?',
      answer:
        "Yes, we provide human expert support to complement our AI capabilities. Our career advisors are available to review your AI-generated content, provide personalized guidance, and help you make the most of HireHub AI features.",
    },
  ]
  </script>