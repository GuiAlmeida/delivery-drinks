<script>
import IconPin from "@/components/icons/icon-pin.vue";

export default {
  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_API_KEY_GOOGLE}&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.initGoogle(),
        },
      ],
    };
  },
  components: {
    IconPin,
  },
  data() {
    return {
      address: null,
      searchResults: [],
      autocomplete: null,
      googleGeolocation: null,
      googlePlaces: "",
      loading: false,
      showDropdown: true,
    };
  },
  mounted() {
    this.$refs.address.addEventListener("input", e => {
      if (e.currentTarget.value == "") this.setEmpty();
    });
  },
  methods: {
    // Init services google
    initGoogle() {
      this.autocomplete = new window.google.maps.places.AutocompleteService();
      this.googleGeolocation = new window.google.maps.Geocoder();
      let map = new window.google.maps.Map(document.createElement("div"));
      this.googlePlaces = new window.google.maps.places.PlacesService(map);
    },

    // read change in input
    readChange() {
      this.showDropdown = true;
      this.initGoogle();
      const options = {
        input: this.address,
        componentRestrictions: { country: "br" },
      };
      this.autocomplete.getPlacePredictions(options, this.displaySuggestions);
    },

    // clear input after selecting an item
    setEmpty() {
      this.address = "";
      this.showDropdown = false;
    },

    // Showing dropdown list
    displaySuggestions(predictions, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
        this.searchResults = predictions;
        this.loading = false;
      } else {
        this.loading = true;
      }
    },

    // set the mounted object based on the selected address
    setPlaceDetails(selected) {
      this.googlePlaces.getDetails({ placeId: selected.place_id }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          this.showDropdown = false;
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const variable = { lat: lat, lng: lng, address: place.formatted_address };
          this.$store.dispatch("search/setDistributor", variable);
        }
      });
    },
  },
};
</script>

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
        <span class="search__input-icon">
          <IconPin />
        </span>
        <input
          class="search__input"
          id="endereco"
          v-model="address"
          type="search"
          ref="address"
          placeholder="Insira o endereço ou o CEP para ver os produtos"
          @input="readChange"
        />

        <div class="search__dropdown-container" ref="search" v-show="showDropdown === true && searchResults.length > 0">
          <span class="search__dropdown-item search__dropdown-item-loading" v-if="loading">Carregando...</span>
          <div v-else>
            <div
              class="search__dropdown-item"
              v-for="(result, i) in searchResults"
              :key="'prediction-' + i"
              @click="setPlaceDetails(result)"
            >
              {{ result.description }}
            </div>
          </div>
        </div>

        <!-- <button type="button" class="btn btn--secondary btn--largue" @click="trySearchDistributor()">continuar</button> -->
      </div>
    </form>
  </section>
</template>

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
  padding: 0 15px;
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
    @media screen and (max-width: 1150px) {
      width: 200px;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
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
    @media screen and (max-width: 1150px) {
      width: 200px;
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  form {
    width: 100%;
  }
  &__title {
    z-index: 1;
    z-index: 1;
    font-size: 28px;
    line-height: 44px;
    text-align: center;
    position: relative;
    color: $secondary;
    font-weight: 300;
    @media screen and (min-width: 600px) {
      font-size: 36px;
    }
  }
  &__container-input {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    position: relative;
  }
  &__input {
    outline: none;
    padding: 0.71rem 1rem 0.71rem 2.5rem;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgb(29, 29, 31);
    background-color: rgb(255, 255, 255);
    border-radius: $radius;
    border: 1px solid $secondary;
    width: 100%;
    @media screen and (min-width: 600px) {
      width: 430px;
    }
  }
  &__input-icon {
    position: absolute;
    top: 10px;
    left: 8px;
  }

  &__dropdown-container {
    z-index: 10;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    height: max-content;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
  }
  &__dropdown-item {
    width: 100%;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 0;
    padding: 1rem;
    line-height: 1.4;
    color: lighten($secondary, 40%);
    cursor: pointer;
    white-space: normal;
    &:hover {
      background-color: #f8f9fa;
      color: $secondary;
      border-radius: 6px;
    }
  }
  &__dropdown-item-loading {
    font-size: 14px;
    color: #747474;
  }
}
</style>
