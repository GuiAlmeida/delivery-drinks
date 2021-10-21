<template>
  <img src="@/assets/logo_2.svg" v-if="type == 'dark'" />
  <img src="@/assets/logo_white.svg" v-else />
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
