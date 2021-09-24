import Vue from "vue";

export function setCookies(key, value, time) {
  Vue.$cookies.set(key, encodeURIComponent(JSON.stringify(value)), time);
}
export function getCookies(key) {
  const cookie = Vue.$cookies.get(key);
  return decodeURIComponent(cookie);
}

export function removeCookies(key) {
  Vue.$cookies.remove(key);
}
