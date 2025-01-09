<template>
    <div>
        <Navbar />
        <div class = "contain">
            <div class = "title flex justify-center items-center flex-col text-center py-5">
                <h1 class = "text-[3rem] md:text-[5rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    中正競程 夢想啟程
                </h1>
                <h2 class = "text-xl md:text-2xl border-t-2 border-purple-300 pt-4">
                    National Chung Cheng University Programming Contest Team
                </h2>
                <div class = "flex justify-center items-center w-full gap-4 pt-4">
                    <a href = '#icons' class = "buttons">
                        Follow us
                    </a>
                    <a href = '/Question' class = "buttons">
                        FAQ
                    </a>
                </div>
            </div>
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

<style>
    .title {
        height: calc(100vh - 4rem);
    }
    .buttons {
        display: inline-block;
        width: 10rem;
        padding: .75rem 1.25rem;
        border-radius: 10rem;
        color: #fff;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: .15rem;
        transition: all .3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(112, 51, 255);
            border-radius: 10rem;
            z-index: -2;
        }
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgb(255, 51, 235);
            transition: all .3s;
            border-radius: 10rem;
            z-index: -1;
        }
        &:hover {
            color: #fff;
            &:before {
            width: 100%;
            }
        }
    }

    
</style>