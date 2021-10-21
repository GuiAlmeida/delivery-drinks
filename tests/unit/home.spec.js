// helpers
export default function googleStub() {
  const google = {
    maps: {
      places: {
        Autocomplete: function() {
          return {
            addListener: function() {},
          };
        },
        Geocoder: function() {
          return {
            geocode: function() {},
          };
        },
      },
    },
  };

  return google;
}

import { shallowMount } from "@vue/test-utils";
import zeSearch from "@/components/search/search.vue";

window.google = global.google = googleStub();

describe("Testing Address Input", () => {
  it("sets the value", async () => {
    const wrapper = await shallowMount(zeSearch);
    const input = wrapper.find("input");

    //set cep
    await input.setValue("04715-002");

    expect(input.element.value).toBe("04715-002");
  });
});
