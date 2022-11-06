<template>
    <footer id="bottom" class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/team" class="mr-4 hover:underline md:mr-6">Team</a>
            </li>
            <li>
                <a href="/contact" class="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
</template>

<style>
#bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;            /* Footer height */
}
</style>