<script src="https://unpkg.com/@johmun/vue-tags-input/dist/vue-tags-input.js"></script>
<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-12 md:h-auto lg:py-0">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="space-y-4 md:space-y-6" @submit.prevent="nextPage">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="text">
              Tell us what's bothering you?
            </label>

            <input v-model="message" placeholder=" Tell me something..." class="w-full" />
          </div>

          <div>
            <vue-tags-input
              v-model="tag"
              :tags="tags"
              @tags-changed="(newTags) => (tags = newTags)"
            />
          </div>

          <div class="flex justify-center items-center mt-5">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-col items-center vertical-center">Go to signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: "",
      tags: [],
      message: "",
    };
  },
  methods: {
    nextPage() {
      let tags = [];
      this.tags.forEach((tag) => {
        tags.push(tag.text);
      });
      let route = "/register?description=" + this.message + "&tags=";
      for (let i = 0; i < tags.length; i++) {
        if (i == tags.length - 1) {
          route += tags[i];
        } else {
          route += tags[i] + ",";
        }
      }
      this.$router.push(route);
    }
  }
};
</script>