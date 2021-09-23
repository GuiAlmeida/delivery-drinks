<template>
  <header :class="{ change_color: scrollPosition > 200 }">
    <div class="container">
      <logo class="logo" :type="scrollPosition > 200 ? 'white' : 'dark'" />
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/about" class="btn" :class="scrollPosition > 200 ? 'btn--primary' : 'btn--secondary'">
              login
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "@/components/icons/logo.vue";

export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  components: {
    logo,
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
.change_color {
  background-color: $secondary;
  svg {
    fill: $off;
  }
  nav {
    ul li {
      a:not(.btn) {
        color: $off;
      }
    }
  }
}
header {
  display: flex;
  padding: 0.475rem 1rem;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  align-items: center;
  z-index: 999;

  p {
    margin-left: 1rem;
  }
  > .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }
  .logo {
    height: 60px;
  }
}

nav {
  margin-left: auto;

  ul li {
    display: inline-flex;
    margin-left: 1rem;
    a {
      color: $secondary;
      font-weight: 600;
      &:hover {
        color: $secondary;
      }
    }
  }
}
</style>
