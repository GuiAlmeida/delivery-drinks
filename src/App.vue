<script>
import { mapState } from "vuex";
import Loading from "@/components/loading/loading.vue";
import Header from "@/components/ze-header.vue";
import Footer from "@/components/ze-footer.vue";

export default {
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      text: false,
    };
  },
  computed: {
    ...mapState({
      loading: state => state.loading.showLoading
    }),
  },
};
</script>

<template>
  <div>
    <Loading v-show="loading" />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
