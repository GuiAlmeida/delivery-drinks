export const PocSearch = `query PocSearch($pocSearchLong: String!, $pocSearchLat: String!) {
   pocSearch(long: $pocSearchLong, lat: $pocSearchLat) {
     id
     status
     name
   }
 }`;
