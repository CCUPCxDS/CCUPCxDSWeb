<template>
    <nav class="flex justify-between items-center h-12 w-full px-3 -z-1 bg-slate-800">
        <div>
            <a href="#" class="font-semibold text-2xl text-pink-100">CCUPC x DS</a>
        </div>
        <div class="md:hidden">
            <button @click="toggleMenu" class="text-pink-100 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <ul class="space-x-4 md:flex hidden">
            <li>
                <a href="#about" class="nav-link">About</a>
            </li>
            <li>
                <a href="#join" class="nav-link">Join Us</a>
            </li>
            <li>
                <a href="#contact" class="nav-link">Contact Us</a>
            </li>
        </ul>
        <transition name="slide-fade">
            <ul v-if="isMenuOpen" class="md:hidden space-y-4 absolute text-center top-12 right-0 w-[max(20%,10rem)] bg-slate-800 p-4 z-10">
                <li>
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li>
                    <a href="#join" class="nav-link">Join Us</a>
                </li>
                <li>
                    <a href="#contact" class="nav-link">Contact Us</a>
                </li>
            </ul>
        </transition>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>