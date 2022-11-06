<template>
    <carousel>
        <slide v-for="matching in matchings" :key="matching.id">
            <div class="mct-10 mb-10 flex items-center justify-center">
                <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center pb-10">
                        <h5 class="mb-1 mt-5 text-3xl font-medium text-gray-900 dark:text-white">{{ matching.name }}</h5>
                        <span class="text-center text-xl text-gray-500 dark:text-gray-400 ml-10 mr-10">{{ matching.description }}</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect</a>
                            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </slide>
    </carousel>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: "Dashboard",
    data() {
        return {
            matchings: [
                
                {
                    id: 1,
                    name: 'disasterkid88',
                    description: 'Have u ever felt like u dont belong anywhere and you can see the days passing by with yourself on autopilot...'
                },
                {
                    id: 2,
                    name: 'sunshineray56',
                    description: 'Why are we even paying taxes?. Since when did living on earth become so damn expensive. It hard to find work when you are in the spectrum...'
                },
                {
                    id: 3,
                    name: 'erenyeager99',
                    description: 'Sometimes I am not myself. Or my true self, since there I am just one ghost in this meat body. I tell them to not interfere with my life and inturn I wont mess around their..'
                },
                {
                    id: 4,
                    name: 'EITstudent',
                    description: 'Aaaaaaaaaaahhhhhhhhhhhhhhhh..'
                },
            ],
        }
    },
    components: {
        Carousel,
        Slide
    }
};
</script>