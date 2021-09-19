<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__content--column">
          <img class="footer__content--logo" src="@/assets/logo.png" />
        </div>
        <div class="footer__content--column">
          <h3 class="footer__subtitle">Sobre o Zé Delivery</h3>
          <ul class="footer__list">
            <li class="footer__list--item"><a href="#">Me ajuda, Zé!</a></li>
            <li class="footer__list--item"><a href="#">Trabalhe conosco</a></li>
            <li class="footer__list--item"><a href="#">Pagamento na Entrega</a></li>
            <li class="footer__list--item"><a href="#">Cidades atendidas</a></li>
          </ul>
        </div>
        <div class="footer__content--column">
          <h3 class="footer__subtitle"></h3>
          <ul class="footer__list">
            <li class="footer__list--item"><a href="#">Central de ajuda</a></li>
            <li class="footer__list--item"><a href="#">Seja um parceiro</a></li>
            <li class="footer__list--item"><a href="#">Termos de uso</a></li>
            <li class="footer__list--item"><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">
        <span class="footer__copyright--brand">© {{ year }} Zé Delivery. Todos os direitos reservados.</span>
        <ul class="footer__copyright--social">
          <li class="footer__copyright--social__item">
            <a href="https://www.facebook.com/zedeliverydebebidas" rel="noopener noreferrer" target="_blank">
              <icon-facebook />
            </a>
          </li>
          <li class="footer__copyright--social__item">
            <a href="https://twitter.com/zedelivery" rel="noopener noreferrer" target="_blank">
              <icon-twitter />
            </a>
          </li>
          <li class="footer__copyright--social__item">
            <a href="https://www.instagram.com/zedelivery" rel="noopener noreferrer" target="_blank">
              <icon-instagram />
            </a>
          </li>
          <li class="footer__copyright--social__item">
            <a href="https://www.linkedin.com/company/zedelivery/" rel="noopener noreferrer" target="_blank">
              <icon-linkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import iconFacebook from "@/components/icons/icon-facebook.vue";
import iconInstagram from "@/components/icons/icon-instagram.vue";
import iconTwitter from "@/components/icons/icon-twitter.vue";
import iconLinkedin from "@/components/icons/icon-linkedin.vue";
export default {
  data() {
    return {};
  },
  components: {
    iconFacebook,
    iconInstagram,
    iconTwitter,
    iconLinkedin,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background: $secondary;
  padding: 40px 0 0;
  &__subtitle {
    font-size: 1.1rem;
    color: $off;
    margin-bottom: 40px;
    min-height: 17px;
  }
  &__list {
    &--item {
      margin-bottom: 15px;
      a {
        color: $off;
        font-size: 0.8rem;
        &:hover {
          text-decoration: underline;
          color: $primary;
        }
      }
    }
  }
  &__content {
    display: grid;
    gap: 15px;
    @media screen and (min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }
    &--logo {
      max-width: 170px;
    }
  }
  &__copyright {
    display: grid;
    align-items: center;
    grid-template-columns: auto;
    gap: 20px;
    padding: 50px 0px 20px;
    @media screen and (min-width: 580px) {
      grid-template-columns: 1fr auto;
    }
    &--social {
      max-width: 150px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 12px;
      &__item {
        a {
          color: $off;
          &:hover {
            color: $primary;
          }
        }
      }
    }
    &--brand {
      color: $off;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
}
</style>
