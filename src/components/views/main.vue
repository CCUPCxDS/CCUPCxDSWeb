<template>
    <div>
        <Navbar />
        <div class = "contain">
            <Cover />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../layout/navbar.vue';
import Footer from '../layout/footer.vue';
import Cover from '../content/cover.vue';
</script>
