<script>
import search from "@/components/search/search.vue";
import works from "@/components/works/works.vue";

export default {
  name: "Home",
  components: {
    search,
    works,
  },
};
</script>

<template>
  <div>
    <search />
    <works />
  </div>
</template>
