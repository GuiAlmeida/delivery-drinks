<script>
import { mapState } from "vuex";
import { filterCurrency } from "@/helpers/currency";
import { getCookies } from "@/helpers/cookies";

export default {
  filters: {
    filterCurrency,
  },
  data() {
    return {
      filter: null,
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      categories: state => state.products.categories,
    }),

    productsFiltered() {
      return this.products.filter(elem => {
        if (!this.filter) return elem;
        if (elem.category.title === this.filter) return elem;
      });
    },
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      const userAddress = getCookies("userAddress");
      if (this.products.length === 0) {
        if (userAddress) {
          this.$store.dispatch("search/setDistributor", JSON.parse(userAddress));
        }
      }
    },

    setCategorie(data) {
      this.filter = data;
    },
  },
};
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <div class="products__categories">
          <div
            class="products__categories--item"
            v-for="categorie in categories"
            :key="categorie.id"
            :class="{ active: filter === categorie.title }"
            @click="setCategorie(categorie.title)"
          >
            {{ categorie.title }}
          </div>
        </div>

        <div class="products__empty" v-if="productsFiltered.length === 0">
          <img src="@/assets/house.png" />
          <p>Opa, estamos sem esses produtos no momento!</p>
        </div>

        <div class="products__cards">
          <a href="#" class="products__cards--item" v-for="product in productsFiltered" :key="product.id">
            <div class="products__cards--image">
              <img :src="product.image" :alt="product.title" />
            </div>
            <div class="products__cards--infos">
              <p class="products__cards--title">{{ product.title }}</p>
              <p class="products__cards--price">{{ product.price | filterCurrency }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  min-height: calc(100vh - 310px);
  padding: 120px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 1px;
  }
  &__empty {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    text-align: center;
    margin: 20px auto auto;
    > img {
      max-width: 115px;
      margin: auto auto 20px;
    }
  }
  &__categories {
    transform: translateX(0px);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 12px;
    margin-bottom: 40px;
    &--item {
      height: 48px;
      grid-template-columns: repeat(6, 1fr);
      width: auto;
      display: flex;
      border-radius: 4px;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      padding: 0 12px;
      flex: 1 1 0%;
      font-weight: 400;
      border: 1px solid $off_2;
      &:hover {
        border: 1px solid rgb(255, 197, 0);
        font-weight: 600;
        cursor: pointer;
      }
      &.active {
        border: 1px solid rgb(255, 197, 0);
        font-weight: 600;
      }
    }
  }
  &__cards {
    transform: translateX(0px);
    transition: 200ms;
    display: grid;
    grid-template-columns: repeat(3, 288.5px);
    grid-gap: 12px;
    &--item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      background: #ffffff;
      text-decoration: none;
      transition: 200ms;
      height: 100%;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px 0px;
      border: 1px solid $off_2;
      cursor: pointer;
      &:hover {
        border: 1px solid $gray_2;
      }
    }
    &--image {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
      > img {
        max-height: 110px;
      }
    }
    &--infos {
      padding: 0 20px;
    }
    &--title {
      flex: 1;
      margin: 8px 0 0 0;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $secondary;
    }
    &--price {
      display: block;
      padding-bottom: 14px;
      margin-top: 20px;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      color: $secondary;
    }
  }
}
</style>
