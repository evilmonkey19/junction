<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-12 md:h-auto lg:py-0">
        <div class="h-96 w-auto bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <h1 class="mt-4 leading-tight text-center text-blue-600 font-bold text-4xl">Our awesome Team</h1>
            <h2 class="text-blue-500 text-center font-semibold text-2xl">Meet the team</h2>
            <ul>
                <li v-for="member in members" :key="member.id">
                    <router-link :to="{ name: 'member', params: { id: member.id } }">
                        <h3 class="mx-8 text-blue-400 text-lg"><strong>{{ member.name }}</strong></h3>
                        <p class="mx-8 text-white text-base">{{ member.bio}}</p>
                        <!--<img :src="require(`@/static/${member.pic}`)" alt class="icon" />-->
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: [
                { id: 1, name: 'Anoop Bidikar', bio: "Mister backend"},
                { id: 2, name: 'Matteo Circa', bio: "Don Pasta Carbonara"},
                { id: 3, name: 'Hari Devaraj', bio: "Am I an AI?"},
                {id: 4, name: 'Tushar Sairam', bio: "Mister Marketing"},
                {id: 5, name: 'Enric Perpinyà', bio: "I don't know how to do a Frontend, but let's go xD"},
            ],
        };
    },
};
</script>