<script>
import { mapState } from "vuex";
import logo from "@/components/icons/logo.vue";
import IconPin from "@/components/icons/icon-pin.vue";
import { removeCookies } from "@/helpers/cookies";

export default {
  data() {
    return {
      scrollPosition: null,
      position: 50,
    };
  },
  components: {
    logo,
    IconPin,
  },
  computed: {
    ...mapState({
      logged: state => state.user.logged,
      userAddress: state => state.user.userAddress,
    }),
    currentRouteName() {
      return this.$route.path;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    isLogof() {
      removeCookies("userAddress");
      this.$store.commit("user/SET_LOGGED", false);
      this.$store.commit("user/SET_ADDRESS", {});
      if (this.$router.history.current.path !== "/") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<template>
  <header :class="{ change_color: scrollPosition > position, logged: logged }">
    <div class="container">
      <span @click="isLogof()">
        <logo class="logo" :type="scrollPosition > position ? 'white' : 'dark'" />
      </span>
      <nav>
        <ul v-if="!logged">
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/" class="btn" :class="scrollPosition > position ? 'btn--primary' : 'btn--secondary'">
              login
            </router-link>
          </li>
        </ul>
        <div v-else class="address-wrapper">
          <span class="address-wrapper__title">Receber agora em</span>
          <span class="address-wrapper__address">
            <IconPin />
            {{ userAddress.address }}
          </span>
          <button type="button" class="btn-link" @click="isLogof">Alterar meu endereço</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  padding: 0;
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
    height: 45px;
    @media screen and (min-width: 960px) {
      height: 60px;
    }
  }
  &.logged {
    box-shadow: inset 0 -1px 0 $off_2;
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

.address-wrapper {
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  flex-direction: column;
  max-width: 240px;
  position: relative;
  &__title {
    font-size: 14px;
    color: $secondary;
  }
  &__address {
    font-size: 14px;
    color: $primary;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 7px;
    font-weight: 500;
    padding-left: 16px;
    svg {
      transform: scale(0.59);
      position: absolute;
      top: 16px;
      left: -7px;
    }
  }
  .btn-link {
    background: transparent;
    border: 0;
    box-shadow: none;
    color: $gray;
    text-decoration: underline;
    font-size: 12px;
    width: auto;
    text-align: left;
    margin-top: 5px;
    cursor: pointer;
  }
}
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
  .address-wrapper {
    &__title {
      color: $off;
    }
    &__address {
      svg {
        fill: $off;
      }
    }
  }
  .btn-link {
    color: $off;
  }
}
</style>
