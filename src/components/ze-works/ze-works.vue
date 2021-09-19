<template>
  <section class="ze-works">
    <div class="container">
      <div class="ze-works__content">
        <div class="ze-works__item">
          <figure>
            <img src="./images/delivery.png" alt="Zé Delivery - Onde você estiver" />
            <h1 class="ze-works__title">
              Onde você estiver
            </h1>
            <p class="ze-works__description">
              Achamos as bebidas geladinhas na sua área e levamos até você!
            </p>
          </figure>
        </div>
        <div class="ze-works__item">
          <figure>
            <img src="./images/favorite.png" alt="Zé Delivery - Só as favoritas" />
            <h1 class="ze-works__title">Só as favoritas</h1>
            <p class="ze-works__description">
              Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!
            </p>
          </figure>
        </div>
        <div class="ze-works__item">
          <figure>
            <img src="./images/cellphone.png" alt="Zé Delivery - Só as favoritas" />
            <h1 class="ze-works__title">Facilita seu brinde</h1>
            <p class="ze-works__description">
              Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!
            </p>
          </figure>
        </div>
      </div>
      <section class="ze-works__cities">
        <h1 class="ze-works__cities--title">Explore por cidades</h1>
        <ul class="ze-works__cities--list">
          <li class="ze-works__cities--item" v-for="city in citys" :key="city.id">
            <a href="#">{{ city }}</a>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ze-works {
  padding: 40px 0;
  &__content {
    display: grid;
    align-self: center;
    justify-self: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
    @media screen and (min-width: 960px) {
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      grid-auto-rows: auto;
    }
  }
  &__title {
    line-height: 24px;
    color: $secondary;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 20px;
  }
  &__description {
    color: $gray;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
  }
  &__cities {
    &--list {
      display: grid;
      grid-area: list / list / list / list;
      grid-template-rows: repeat(7, min-content);
      grid-auto-columns: 1fr;
      gap: 15px;
      margin-top: 30px;
      text-align: center;
      @media screen and (min-width: 560px) {
        grid-template-rows: repeat(11, min-content);
        grid-auto-flow: column;
        grid-area: list / list / list / list;
      }
      @media screen and (min-width: 960px) {
        grid-template-rows: repeat(7, min-content);
      }
      a {
        color: lighten($secondary, 40%);
        &:hover{
           text-decoration: underline;
        }
      }
    }
    &--title {
      text-align: center;
      font-size: 1.5em;
      margin: 60px 0 40px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      citys: [
        "Aracaju",
        "Belém",
        "Belo Horizonte",
        "Brasília",
        "Cuiabá",
        "Curitiba",
        "Florianópolis",
        "Fortaleza",
        "Goiânia",
        "João Pessoa",
        "Macapá",
        "Maceió",
        "Manaus",
        "Natal",
        "Palmas",
        "Porto Alegre",
        "Recife",
        "Rio de Janeiro",
        "Salvador",
        "São Paulo",
        "Vitória",
      ],
    };
  },
};
</script>
