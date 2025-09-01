<template>
    <div class="bg-primary-950"
        style="background-image: url('/svg/pattern2.svg'); background-repeat: no-repeat; background-size: 140px;">

        <main>
            <div class="relative isolate">


                <div class="overflow-hidden">

                    <div class="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                        <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <div class="badge" v-motion-slide-bottom>#1 AI Resume Builder .</div>
                                <h1 class="text-5xl tracking-tight pt-4 font-medium leading-[1.1] text-pretty text-white"
                                    v-motion-slide-bottom>
                                    Transform your Job Application into a
                                    <TypingText :text="typingTexts" :pre-type-delay="70" :type-delay="70"
                                        :pre-erase-delay="2000" :erase-delay="50" erase-style="select-all"
                                        :text-color="'#0ea5e9'" />
                                </h1>
                                <p class="mt-8 text-md text-primary-50" v-motion-slide-bottom>
                                    From crafting your resume to interview simulation, our platform leverages artificial
                                    intelligence to personalize your application journey and prepare you for success.
                                </p>
                                <div class="mt-10 flex items-center gap-x-6" v-motion-slide-bottom>
                                    <HbButton variant="primary">Get started</HbButton>
                                </div>
                            </div>
                            <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                                v-motion-fade>
                                <img src="@/assets/svg/hero.svg" class="w-full" alt="Hero illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <CompanyLogos />
        <!-- How It Works Section -->
        <section class="how-it-works-section py-16 bg-gray-50">
            <div class="container max-w-7xl mx-auto px-4">
                <div class="mb-12" v-motion-slide-visible-once-bottom>
                    <h2 class="section-title text-primary-900 font-semibold text-3xl mb-4">
                        How HireHub AI Works
                    </h2>
                    <p class="section-subtitle max-w-3xl text-primary-900">
                        Our AI-powered platform streamlines your job search process in three simple steps,
                        ensuring you stand out in today's competitive market.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <div v-for="(step, index) in howItWorksSteps" :key="index"
                        v-motion-slide-visible-once-bottom
                        :delay="100 * index"
                        class="relative lg:last:before:hidden lg:last:after:hidden before:hidden after:hidden lg:before:block lg:after:block before:absolute after:absolute before:top-[15%] after:top-[40%] before:right-[-1rem] after:right-[-1rem] before:w-[2px] after:w-[1px] before:h-[25%] after:h-[60%] before:bg-gradient-to-b before:from-primary-400 before:to-primary-500 after:bg-gray-200">
                        <div class="mb-6 mt-4">
                            <div
                                class="text-primary rounded-lg text-5xl justify-center mb-4 hover:scale-105 transition-transform ">
                                <span class="font-heading font-bold">0{{ index + 1 }}</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold  text-primary-900 mb-1">{{ step.title }}</h3>
                        <p class="text-sm font-medium leading-6 text-gray-700">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="features-section py-16 ">
            <div class="container max-w-7xl mx-auto px-4">
                <div class="mb-12" v-motion-slide-visible-once-bottom>
                    <h2 class="section-title text-primary font-semibold text-3xl mb-4">
                        Overcoming the Obstacles of Today's Job Market: A Path Forward
                    </h2>
                    <p class="section-subtitle max-w-4xl  text-primary-100">
                        In an era where the job market is more competitive than ever, job seekers face a myriad of obstacles – from navigating through automated application systems to crafting resumes that stand out. The challenge isn’t just finding a job; <u>it’s breaking through the noise to get noticed.</u> 
                    </p>
                </div>

                
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TypingText from '@/components/UI/TypingText.vue'
import HbButton from '@/components/UI/HbButton.vue'
import CompanyLogos from '@/components/CompanyLogos.vue';

useHead({
  title: 'HireHub AI - Smart Resume Builder & Job Application Assistant',
  meta: [
    { name: 'description', content: 'Transform your job applications with HireHub AI. Create ATS-friendly resumes, get personalized career guidance, and prepare for interviews with AI-powered tools.' },
    { name: 'keywords', content: 'resume builder, AI resume, job application, career guidance, interview preparation, ATS-friendly resume' },
    // Open Graph
    { property: 'og:title', content: 'HireHub AI - Smart Resume Builder & Job Application Assistant' },
    { property: 'og:description', content: 'Create professional, ATS-friendly resumes and get personalized career guidance with AI-powered tools.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hirehub.ai' },
    { property: 'og:image', content: '/og-image.jpg' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'HireHub AI - Smart Resume Builder' },
    { name: 'twitter:description', content: 'Create professional, ATS-friendly resumes and get personalized career guidance with AI-powered tools.' },
    { name: 'twitter:image', content: '/og-image.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hirehub.ai' }
  ]
});

const typingTexts = ['Selection', 'Interview', 'Recruitment',];
const howItWorksSteps = [
    {
        title: 'Upload or Create Resume',
        description: 'Start by uploading your current resume or create one from scratch using our AI-powered tools.',
    },
    {
        title: 'AI Enhancement',
        description: 'Our AI analyzes and enhances your resume, tailoring it to your target roles and industry standards.',
    },
    {
        title: 'Track Progress',
        description: 'Monitor your application status, receive interview tips, and get personalized career guidance.',
    },
    {
        title: 'Get Hired',
        description: 'Land your dream job with confidence, knowing youve presented yourself in the best possible way.',
    }
];
</script>

<script>
export default {
    name: 'IndexPage'
}
</script>

<style lang="scss">
.badge {
    font-size: 14px;
    color: var(--primary-500);
    padding: var(--spacing-1) var(--spacing-2);
    font-weight: var(--font-semibold);
    border-radius: var(--radius-md);
    display: inline-flex;
    align-items: center;
    font-family: var(--font-heading);
    transition: all var(--transition-normal) var(--transition-ease);
    text-transform: uppercase;
    letter-spacing: 1px;

}

.text-35px {
    font-size: 35px !important;
}
</style>