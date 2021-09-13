<template>
  <section>
    <Search msg="Welcome to Your Vue.js App" />
  </section>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/ze-search/ze-search.vue";

export default {
  name: "Home",
  components: {
    Search,
  },
};
</script>
