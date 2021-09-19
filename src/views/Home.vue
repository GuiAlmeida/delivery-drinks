<template>
  <div>
    <ze-search />
    <ze-works />
    <ze-app />
  </div>
</template>

<script>
import zeSearch from "@/components/ze-search/ze-search.vue";
import zeWorks from "@/components/ze-works/ze-works.vue";
import zeApp from "@/components/ze-app/ze-app.vue";

export default {
  name: "Home",
  components: {
    zeSearch,
    zeWorks,
    zeApp,
  },
};
</script>
