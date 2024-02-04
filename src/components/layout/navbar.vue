<template>
    <div class = "h-16 bg-slate-800 flex justify-between items-center mx-auto">
        <router-link class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-3xl align-middle ml-3" to="/">
            CCUPCxDS
        </router-link>
        <div class="flex space-x-4 mr-8">
            <router-link class="text-white hover:text-purple-300 duration-300" to="/">Home</router-link>
            <router-link class="text-white hover:text-purple-300 duration-300" to="/Question">FAQ</router-link>
        </div>
    </div>
</template>