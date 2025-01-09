<template>
    <div>
        <Navbar />
        <div class="contain flex justify-center flex-col items-center overflow-hidden w-full">
            <div class = "bg relative w-full flex justify-center flex-col items-center pt-6 pb-6">
                <h1 class = "text-4xl font-bold text-center py-5">
                    常見問題
                </h1>
                <div class = "question_block md:rounded-lg rounded-none min-h-12 w-full md:w-[50rem]" v-for = "qa in QuestionAndAnswer">
                    <div class = "question text-xl py-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Q: {{qa.question}}
                    </div>
                    <div class = "answer">
                        A: {{qa.answer}}
                    </div>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../layout/navbar.vue';
import Footer from '../layout/footer.vue';

const QuestionAndAnswer = [
    {
        question: "請問中正競程是系隊嗎?不是資工系的也可以加入嗎?",
        answer: "中正競程是隸屬於資工系的系隊，但不限於資工系的學生也可以加入，歡迎各系的同學加入我們!"
    },
    {
        question: "我沒有程式基礎，可以加入中正競程嗎?",
        answer: "可以!中正競程歡迎各種程度的同學加入，我們會從最基礎的內容開始，但是也要大家有自學的熱忱，因為上課時間有限，無法一一解答所有問題。"
    },
    {
        question: "中正競程的課程時間是?",
        answer: "課程時間是每週五下午13:30~17:00，地點在創新大樓 324 教室。"
    },
    {
        question: "中正競程的課程內容是?",
        answer: "課程內容包含基礎程式設計、資料結構以及演算法，旨在帶起大家對程式競賽的興趣，並且提升解題能力，同時也營造一個互相學習的環境，歡迎大家一起加入參與程式競賽的行列。"
    },
    {
        question: "中正競程的課程費用是?",
        answer: "中正競程的課程是免費的，歡迎大家踴躍自由參加，而且也不算學分不點名，只要有興趣就可以來參加。"
    },
    {
        question: "競程上課時都使用什麼程式語言?",
        answer: "競程上課時主要使用 C++，但是練習時與檢測賽時可以使用 Java 或 Python。"
    }
]


</script>

<style scoped>
    .bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #d59723, #ab23d5);
	    background-size: 400% 400%;
        filter: blur(2px);
        z-index: -1; /* 確保背景在內容之下 */
        animation: ani 15s ease infinite; /* 背景動畫 */
    }
    @keyframes ani {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

</style>