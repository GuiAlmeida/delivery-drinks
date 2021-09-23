// Google maps
export function _routeGoogleGeolocation(lat, long, key) {
  return `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${key}`;
}
