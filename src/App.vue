<template>
  <section>
    <Header />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/ze-header.vue";
import Footer from "@/components/ze-footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
