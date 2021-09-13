<template>
  <footer>
    <div class="container">
      <p>Copyright &copy; {{ year }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
footer {
  background: $primary;
}
</style>
