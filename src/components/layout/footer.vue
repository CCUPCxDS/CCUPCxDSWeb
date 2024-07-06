<template>
    <div class = "h-24 py-4 bg-slate-800 flex flex-col justify-between items-center mx-auto">
        <div class = "icons">
            <a href="https://www.facebook.com/CCUPCxDS" target="_blank">
                <font-awesome-icon icon="fab fa-facebook" class="text-white hover:text-purple-300 duration-300" />
            </a>
            <a href="https://www.instagram.com/ccupcxds/" target="_blank">
                <font-awesome-icon icon="fab fa-instagram" class="text-white hover:text-purple-300 duration-300" />
            </a>
            <a href="https://discord.gg/YFK42UuedB" target="_blank">
                <font-awesome-icon icon="fab fa-discord" class="text-white hover:text-purple-300 duration-300" />
            </a>
        </div>
        <router-link class="text-slate-400 text-sm align-middle mx-auto" to="/">
            CCUPCXDS 2024 All rights reserved.  
        </router-link>
    </div>
</template>

<style scoped>
    .icons {
        display: flex;
        gap: 1rem;
    }
    .icons a {
        font-size: 1.5rem;
    }
</style>