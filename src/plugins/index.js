import Vue from "vue";
import VueMeta from "vue-meta";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
