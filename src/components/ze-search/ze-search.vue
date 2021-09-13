<template>
  <section class="search">
    <h1 class="search__title">
      <strong>Bebidas geladas</strong>
      a
      <strong>preço</strong>
      <br />
      de mercado na sua casa
      <strong>agora</strong>
    </h1>
    <form>
      <div class="search__container-input">
        <input class="search__input" type="search" placeholder="Inserir endereço para ver preço" />
        <button class="btn btn--secondary btn--largue">continuar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.search {
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  padding-top: 72px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    content: " ";
    width: 250px;
    height: 100%;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    left: 20px;
    background-position: center 300px;
    background-image: url("./images/beer_1.svg");
  }
  &::after {
    content: " ";
    width: 300px;
    height: 100%;
    position: absolute;
    background-size: 100%;
    background-repeat: no-repeat;
    right: 20px;
    top: 40px;
    background-position: center 80px;
    background-image: url("./images/beer_2.svg");
  }

  &__title {
    z-index: 1;
    z-index: 1;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    position: relative;
    color: $secondary;
    font-weight: 300;
  }
  &__container-input {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
  }
  &__input {
    outline: none;
    padding: 0.71rem 1rem;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgb(29, 29, 31);
    background-color: rgb(255, 255, 255);
    border-radius: $radius;
    border: 1px solid $secondary;
    width: 100%;
    @media screen and (min-width: 998px) {
      width: 350px;
    }
  }
}
</style>
