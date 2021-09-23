<template>
  <img src="@/assets/logo_dark.png" v-if="type == 'dark'" />
  <img src="@/assets/logo.png" v-else />
</template>

<script>
export default {
  props: {
    type: String,
  },
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
