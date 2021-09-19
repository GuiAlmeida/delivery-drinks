<template>
  <section class="ze-app">
    <div class="container">
      <div class="ze-app__content">
        <div class="ze-app__column-left">
          <h1>
            Já baixou o app?
          </h1>
          <p>
            Entregamos onde estiver, através de nosso parceiro mais próximo de você.
          </p>
          <div class="ze-app__badge">
            <a target="_blank" rel="noreferrer noopener" href="https://go.onelink.me/app/488889bc">
              <img src="./images/google-play-badge-1.png" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://go.onelink.me/app/3a16d1b2">
              <img src="./images/apple_store_badge.png" />
            </a>
          </div>
        </div>
        <div class="ze-app__column-right">
          <img class="ze-app__image" src="./images/mockups_2.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ze-app {
  width: 100%;
  background: $primary;
  padding: 60px 0;
  > .container {
    align-items: center;
  }
  &__content {
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    align-items: center;
    @media screen and (min-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  &__column-left {
    h1 {
      text-align: left;
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    p {
      text-align: left;
      font-size: 1.1em;
      line-height: 1.4;
      margin-bottom: 20px;
    }
  }
  &__column-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__badge {
    display: grid;
    align-self: center;
    justify-self: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
    img {
      max-width: 170px;
    }
  }
  &__image {
    max-width: 400px;
  }
}
</style>
