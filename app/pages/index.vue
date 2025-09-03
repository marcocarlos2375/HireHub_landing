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
                    <div v-for="(step, index) in howItWorksSteps" :key="index" v-motion-slide-visible-once-bottom
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
        <section class="py-16 bg-white ">
            <div class="container max-w-7xl mx-auto px-4">
                <div class="mb-12" v-motion-slide-visible-once-bottom>
                    <h2 class="section-title text-primary font-semibold text-3xl mb-4">
                        Overcoming the Obstacles of Today's Job Market: A Path Forward
                    </h2>
                    <p class="section-subtitle max-w-4xl ">
                        In an era where the job market is more competitive than ever, job seekers face a myriad of
                        obstacles – from navigating through automated application systems to crafting resumes that stand
                        out. The challenge isn’t just finding a job; <u>it’s breaking through the noise to get
                            noticed.</u>
                    </p>
                </div>


            </div>
        </section>
        <section>
            <div class="bg-white">
                <div class="mx-auto max-w-7xl">
                    <div class="grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
                        <div v-for="stat in stats" :key="stat.name" class="bg-white px-4 py-6 sm:px-6 lg:px-8">
                            <p class="text-sm/6 font-medium text-gray-500">{{ stat.name }}</p>
                            <p class="mt-2 flex items-baseline gap-x-2">
                                <span class="text-4xl font-semibold tracking-tight text-gray-900 font-heading">{{
                                    stat.value }}</span>
                                <span v-if="stat.unit" class="text-sm text-gray-500">{{ stat.unit }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="container max-w-7xl mx-auto px-4">
                <div class="mb-12" v-motion-slide-visible-once-bottom>

                    <h2 class="section-title text-primary font-semibold text-3xl mb-4">
                        Beautiful ready-to-use resume templates
                    </h2>
                    <p class="section-subtitle max-w-4xl  ">
                        Win over employers and recruiters by using one of our 25+ elegant, professionally-designed
                        resume templates.
                        Download to word or PDF.
                    </p>

                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <div class="w-full lg:w-1/2 bg-primary py-8 px-6 sm:py-12 sm:px-12 lg:rounded-l-lg">
                        <div
                            class="text-white text-sm font-bold py-6 uppercase tracking-widest flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                                width="22" fill="#fff">
                                <path
                                    d="M24,12c0-1.696-.86-3.191-2.168-4.073,.301-1.548-.148-3.213-1.347-4.413-1.199-1.199-2.864-1.648-4.413-1.347-.882-1.308-2.377-2.168-4.073-2.168s-3.191,.86-4.073,2.168c-1.548-.301-3.214,.148-4.413,1.347-1.199,1.199-1.648,2.864-1.347,4.413-1.308,.882-2.168,2.377-2.168,4.073s.86,3.191,2.168,4.073c-.301,1.548,.148,3.214,1.347,4.413,1.199,1.199,2.864,1.648,4.413,1.347,.882,1.308,2.377,2.168,4.073,2.168s3.191-.86,4.073-2.168c1.548,.301,3.214-.148,4.413-1.347,1.199-1.199,1.648-2.864,1.347-4.413,1.308-.882,2.168-2.377,2.168-4.073Zm-12.091,3.419c-.387,.387-.896,.58-1.407,.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z" />
                            </svg>
                            Certified By HR
                        </div>
                        <h2 class="text-white font-semibold text-5xl sm:text-7xl mb-4">
                            25+
                        </h2>
                        <span class="text-white font-semibold tracking-widest uppercase font-heading">templates</span>
                        <div class="text-white py-6">Elegant, professional-designed, ATS-friendly resumes and cover
                            letter templates. Ready to use.</div>
                        <HbButton variant="white">Get started</HbButton>
                    </div>
                    <div class="w-full lg:w-1/2 bg-gray-100  lg:rounded-r-lg overflow-hidden">
                        <img src="/templates/block/templates__block.webp" alt="Resume"
                            class="w-full h-full object-cover" />
                    </div>
                </div>


            </div>
        </section>
        <section
            class="relative h-1/2 py-16 md:py-24 text-white bg-gradient-to-r bg-gradient-to-t from-primary-950 to-[#041825] overflow-hidden animate-gradient">
            <div class="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-transparent"></div>
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,47,73,0.3)_0%,_transparent_70%)] z-[1]">
            </div>
            <div
                class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent">
            </div>
            <div
                class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent">
            </div>
            <div class="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl">
            </div>
            <div class="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl">
            </div>
            <div class="container max-w-7xl mx-auto px-4 relative  items-center justify-center z-10">
                <div>
                    <h2 class="gradient-heading text-5xl text-center">
                        Create Everything From a Single URL
                    </h2>
                    <p class="text-center text-white text-lg mt-4 opacity-90">
                        With HireHub AI, you can create everything from a single URL. Whether you need a resume, cover
                        letter, or job application, our AI-powered tools make it easy to get started.
                    </p>

                </div>
                <div class="w-full flex items-center justify-center pt-12">
                    <img src="/svg/browser.svg" class="w-1/2" alt="">
                </div>
                <HeroAI />
            </div>

        </section>
        <section class="py-16 bg-white">
            <div class="container max-w-7xl mx-auto px-4">
                <div>
                    <h2 class="section-title font-semibold text-5xl mb-4 text-center">
                        Components Tailored For Every Profession
                    </h2>
                    <div class="section-subtitle max-w-4xl mx-auto text-center pt-4 pb-12">
                        Customize your resume and cover letter with components designed specifically for your
                        profession. Our AI-driven tool ensures that each section highlights the skills, achievements,
                        and experiences that matter most in your field.
                    </div>
                    <div class="relative mt-10 pb-3">
                        <div ref="scrollContainer" class="flex overflow-x-auto hide-scrollbar scroll-smooth">
                            <div class="controls absolute bottom-8 right-8 z-20 group/control">
                                <button
                                    class="p-3 rounded-full bg-primary-900/90 backdrop-blur-md border border-primary-400/30 hover:bg-primary-800/90 hover:border-primary-400/50 transition-all duration-300 shadow-lg text-white hover:shadow-xl hover:scale-110 active:scale-95 hover:rotate-[360deg] ring-2 ring-primary-400/20 ring-offset-2 ring-offset-transparent hover:ring-primary-400/40"
                                    @click="isPaused = !isPaused">
                                    <Transition mode="out-in">
                                        <svg v-if="!isPaused" key="pause" xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="6" y="4" width="4" height="16" />
                                            <rect x="14" y="4" width="4" height="16" />
                                        </svg>
                                        <svg v-else key="play" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                            viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </Transition>
                                </button>

                            </div>
                            <!-- Gradient fades -->
                            <div class="absolute left-0 top-0 w-24 h-full  z-10 flex items-center transition-all duration-300"
                                :class="{ 'opacity-90 translate-x-2': !canScrollLeft }">
                                <button
                                    class="group/scroll ml-4 p-2 rounded-full bg-primary-900/90 backdrop-blur-md border border-primary-400/30 hover:bg-primary-800/90 hover:border-primary-400/50 transition-all duration-300 shadow-lg text-white hover:shadow-xl hover:scale-110 active:scale-95 relative disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-900/90 disabled:hover:border-primary-400/30 disabled:translate-x-1"
                                    @click="scrollLeft" :disabled="!canScrollLeft">
                                    <div
                                        class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary-900/95 backdrop-blur-md rounded text-xs text-white whitespace-nowrap opacity-0 group-hover/scroll:opacity-100 transition-all duration-200 shadow-lg scale-95 group-hover/scroll:scale-100 border border-primary-400/20">
                                        Scroll left <kbd
                                            class="px-1 py-0.5 bg-white/10 rounded border border-white/20 ml-1 font-mono text-[10px]">←</kbd>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="absolute right-0 top-0 w-24 h-full z-10 flex items-center justify-end transition-all duration-300"
                                :class="{ 'opacity-90 -translate-x-2': !canScrollRight }">
                                <button
                                    class="group/scroll mr-4 p-2 rounded-full bg-primary-900/90 backdrop-blur-md border border-primary-400/30 hover:bg-primary-800/90 hover:border-primary-400/50 transition-all duration-300 shadow-lg text-white hover:shadow-xl hover:scale-110 active:scale-95 relative disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-900/90 disabled:hover:border-primary-400/30 disabled:-translate-x-1"
                                    @click="scrollRight" :disabled="!canScrollRight">
                                    <div
                                        class="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary-900/95 backdrop-blur-md rounded text-xs text-white whitespace-nowrap opacity-0 group-hover/scroll:opacity-100 transition-all duration-200 shadow-lg scale-95 group-hover/scroll:scale-100 border border-primary-400/20">
                                        Scroll right <kbd
                                            class="px-1 py-0.5 bg-white/10 rounded border border-white/20 ml-1 font-mono text-[10px]">→</kbd>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="relative">
                                <div ref="scrollContainer"
                                    class="flex space-x-8 p-8 snap-x snap-mandatory scroll-pl-8 scroll-smooth animate-scroll-infinite"
                                    :class="{ 'paused': isPaused }">
                                    <div v-for="(profession, idx) in [...professions, ...professions]"
                                        :key="`${profession.title}-${idx}`" class="flex-none snap-center">
                                        <ProfessionCard :title="profession.title" :jobs="profession.jobs"
                                            :bgClass="profession.bgClass" @mouseenter="isPaused = true"
                                            @mouseleave="isPaused = false" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TypingText from '@/components/UI/TypingText.vue'
import HbButton from '@/components/UI/HbButton.vue'
import CompanyLogos from '@/components/CompanyLogos.vue'
import HeroAI from '@/components/HeroAI.vue'
import ProfessionCard from '@/components/ProfessionCard.vue'

const isPaused = ref(false);
const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);
const touchStartX = ref(null);
const touchStartScrollLeft = ref(0);


const updateScrollButtons = () => {
    if (scrollContainer.value) {
        canScrollLeft.value = scrollContainer.value.scrollLeft > 0;
        canScrollRight.value = scrollContainer.value.scrollLeft < (scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth);
    }
};

const scrollLeft = () => {
    if (scrollContainer.value) {
        const cardWidth = 400;
        const spacing = 32; // 8rem
        const scrollAmount = cardWidth + spacing;
        const currentScroll = scrollContainer.value.scrollLeft;
        const targetScroll = Math.floor(currentScroll / scrollAmount) * scrollAmount - scrollAmount;
        scrollContainer.value.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (scrollContainer.value) {
        const cardWidth = 400;
        const spacing = 32; // 8rem
        const scrollAmount = cardWidth + spacing;
        const currentScroll = scrollContainer.value.scrollLeft;
        const targetScroll = Math.ceil(currentScroll / scrollAmount) * scrollAmount + scrollAmount;
        scrollContainer.value.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
};
const stats = [
    { name: 'Number of deploys', value: '405' },
    { name: 'Average deploy time', value: '3.65', unit: 'mins' },
    { name: 'Number of servers', value: '3' },
    { name: 'Success rate', value: '98.5%' },
];
watch(isPaused, (newValue) => {
    if (!scrollContainer.value) return;

    // When pausing, snap to the nearest card
    const cardWidth = 400;
    const spacing = 32;
    const scrollAmount = cardWidth + spacing;
    const currentScroll = scrollContainer.value.scrollLeft;
    const targetScroll = Math.round(currentScroll / scrollAmount) * scrollAmount;
    scrollContainer.value.scrollTo({ left: targetScroll, behavior: 'smooth' });
})

const handleKeydown = (e) => {
    if (e.code === 'Space') {
        e.preventDefault()
        isPaused.value = !isPaused.value
    } else if (e.code === 'ArrowLeft') {
        scrollLeft()
    } else if (e.code === 'ArrowRight') {
        scrollRight()
    }
}

const handleTouchStart = (e) => {
    if (scrollContainer.value) {
        touchStartX.value = e.touches[0].clientX;
        touchStartScrollLeft.value = scrollContainer.value.scrollLeft;
    }
};

const handleTouchMove = (e) => {
    if (scrollContainer.value && touchStartX.value !== null) {
        const touchCurrentX = e.touches[0].clientX;
        const diff = touchStartX.value - touchCurrentX;
        scrollContainer.value.scrollLeft = touchStartScrollLeft.value + diff;
    }
};

const handleTouchEnd = () => {
    touchStartX.value = null;
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', updateScrollButtons);
        scrollContainer.value.addEventListener('touchstart', handleTouchStart);
        scrollContainer.value.addEventListener('touchmove', handleTouchMove);
        scrollContainer.value.addEventListener('touchend', handleTouchEnd);
        updateScrollButtons();
    }
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('scroll', updateScrollButtons);
        scrollContainer.value.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.value.removeEventListener('touchmove', handleTouchMove);
        scrollContainer.value.removeEventListener('touchend', handleTouchEnd);
    }
})

const professions = [
    {
        title: 'Education',
        jobs: ['Teacher', 'Teaching Assistant', 'School Administrator', 'Higher Education Manager', 'Curriculum Developer', 'Education Consultant'],
        bgClass: 'bg-education'
    },
    {
        title: 'Technology',
        jobs: ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 'DevOps Engineer', 'Cloud Architect'],
        bgClass: 'bg-tech'
    },
    {
        title: 'Healthcare',
        jobs: ['Nurse', 'Medical Doctor', 'Pharmacist', 'Physical Therapist', 'Healthcare Administrator', 'Medical Researcher'],
        bgClass: 'bg-healthcare'
    },
    {
        title: 'Finance',
        jobs: ['Financial Analyst', 'Investment Banker', 'Accountant', 'Financial Advisor', 'Risk Manager', 'Portfolio Manager'],
        bgClass: 'bg-finance'
    },
    {
        title: 'Marketing',
        jobs: ['Digital Marketing Manager', 'Brand Strategist', 'Content Creator', 'Social Media Manager', 'SEO Specialist', 'Marketing Analyst'],
        bgClass: 'bg-marketing'
    },
    {
        title: 'Legal',
        jobs: ['Corporate Lawyer', 'Legal Consultant', 'Patent Attorney', 'Legal Researcher', 'Compliance Officer', 'Legal Assistant'],
        bgClass: 'bg-legal'
    },
    {
        title: 'Engineering',
        jobs: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Chemical Engineer', 'Aerospace Engineer', 'Environmental Engineer'],
        bgClass: 'bg-engineering'
    },
    {
        title: 'Creative',
        jobs: ['Graphic Designer', 'UI/UX Designer', 'Art Director', 'Illustrator', 'Motion Designer', 'Video Editor'],
        bgClass: 'bg-creative'
    },
    {
        title: 'Sales',
        jobs: ['Sales Manager', 'Account Executive', 'Business Development', 'Sales Representative', 'Sales Operations', 'Customer Success'],
        bgClass: 'bg-sales'
    }
]

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

<style>
:root {
    --primary-400: 79, 70, 229;
    /* Indigo-400 color values */
}
</style>

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

.gradient-heading {
    font-weight: 600;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary-400), var(--primary-100));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.text-35px {
    font-size: 35px !important;
}

.bg-education {
    background-image: url('/jobs/Group 26.png');
}

.bg-tech {
    background-image: url('/jobs/tech.png');
}

.bg-healthcare {
    background-image: url('/jobs/healthcare.png');
}

.from-primary-950 {
    --tw-gradient-from: #082f49 var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(8 47 73 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}





.animate-scroll-infinite {
    --scroll-play-state: running;
    animation: scroll 30s linear infinite;
    animation-play-state: var(--scroll-play-state);
    will-change: transform;
}

.animate-scroll-infinite.paused {
    --scroll-play-state: paused;
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

.hide-scrollbar {
    --scrollbar-color: var(--primary-950);
    --scrollbar-hover-color: rgba(var(--primary-400), 0.6);
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-color) transparent;
}

.hide-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.hide-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.hide-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 20px;
    border: 2px solid transparent;
    transition: background-color 0.2s ease;
}

.hide-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-hover-color);
}
</style>